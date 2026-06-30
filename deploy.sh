#!/bin/bash
set -e

echo "[1/5] git pull..."
cd /var/www/belleeclat
git pull origin main

echo "[2/5] Проверка node_modules..."
if [ ! -f node_modules/.bin/next ]; then
  echo "  node_modules отсутствует, запускаю npm install..."
  npm install
fi

echo "[3/5] Чистка .next..."
pkill -f 'next build' 2>/dev/null || true
sleep 1
rm -rf .next

echo "[4/5] Сборка..."
node node_modules/next/dist/bin/next build

echo "[5/5] Рестарт PM2..."
pm2 restart belleeclat

echo "✓ Задеплоено успешно"
