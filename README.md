# メンバーシップ用ホームページ

メンバーシッププランの紹介と管理を行うホームページです。

## 機能

- プラン一覧の表示（ベーシック、プレミアム、エリート）
- 最高ランクプランメンバーの一覧表示（選ばれた者たち）
- プラン変更・購入画面への遷移
- レスポンシブデザイン対応

## 起動方法

### 方法1: npmを使用（推奨）

```bash
npm start
```

ブラウザが自動的に開き、`http://localhost:8080` でアクセスできます。

開発モード（キャッシュ無効）で起動する場合：
```bash
npm run dev
```

### 方法2: Pythonを使用

Python 3がインストールされている場合：

```bash
python3 -m http.server 8080
```

または

```bash
python -m http.server 8080
```

その後、ブラウザで `http://localhost:8080` にアクセスしてください。

### 方法3: Node.jsのhttp-serverを直接使用

```bash
npx http-server -p 8080 -o
```

## ファイル構成

- `index.html` - メインホームページ
- `purchase.html` - プラン購入・変更画面
- `styles.css` - スタイルシート
- `script.js` - メインページのJavaScript
- `purchase.js` - 購入ページのJavaScript

## カスタマイズ

プラン情報やメンバー情報を変更する場合は、`script.js` と `purchase.js` 内の以下の配列を編集してください：

- `plansData` - プラン情報
- `eliteMembers` - 最高ランクプランのメンバーリスト
