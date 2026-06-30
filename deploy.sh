#!/bin/bash
set -e

echo "[1/4] git pull..."
cd /var/www/belleeclat
git pull origin main

echo "[2/4] Чистка .next..."
pkill -f 'next build' 2>/dev/null || true
sleep 1
rm -rf .next

echo "[3/4] Сборка..."
node node_modules/next/dist/bin/next build

echo "[4/4] Рестарт PM2..."
pm2 restart belleeclat

echo "✓ Задеплоено успешно"
