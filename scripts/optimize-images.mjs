/**
 * Script de otimização de imagens: PNG → WebP
 * Converte todos os assets PNG para WebP com qualidade 85
 * e salva na mesma pasta com extensão .webp
 * 
 * Uso: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, '../src/assets');

const formatBytes = (bytes) => {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
};

async function optimizeImages() {
  const files = await readdir(ASSETS_DIR);
  const pngFiles = files.filter(f => extname(f).toLowerCase() === '.png');

  console.log(`\n🖼️  Otimizando ${pngFiles.length} imagens PNG → WebP...\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of pngFiles) {
    const inputPath = join(ASSETS_DIR, file);
    const outputName = basename(file, '.png') + '.webp';
    const outputPath = join(ASSETS_DIR, outputName);

    const statBefore = await stat(inputPath);
    totalBefore += statBefore.size;

    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    const statAfter = await stat(outputPath);
    totalAfter += statAfter.size;

    const saving = (((statBefore.size - statAfter.size) / statBefore.size) * 100).toFixed(1);
    console.log(`  ✅ ${file} → ${outputName}`);
    console.log(`     ${formatBytes(statBefore.size)} → ${formatBytes(statAfter.size)} (-${saving}%)`);
  }

  const totalSaving = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
  console.log(`\n🚀 Total: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)} (economia de ${totalSaving}%)\n`);
}

optimizeImages().catch(console.error);
