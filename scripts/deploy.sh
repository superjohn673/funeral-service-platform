#!/bin/bash

# 建立生產環境
npm run build

# 壓縮建置檔案
cd build
zip -r ../build.zip .
cd ..

# 清理舊的建置檔案
rm -rf build