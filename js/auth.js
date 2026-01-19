// 認証ロジック

// 認証状態をセッションストレージで管理
function checkAuth(level) {
  return sessionStorage.getItem(`auth_${level}`) === 'true';
}

function authenticate(level, inputPassword) {
  const config = AUTH_CONFIG[level];
  if (inputPassword === config.password) {
    sessionStorage.setItem(`auth_${level}`, 'true');
    return true;
  }
  return false;
}

// 限定ページ読み込み時に認証チェック
// 一時的に無効化（中身のチェック用）
function requireAuth(level) {
  // 認証チェックを一時的に無効化
  return true;
  
  // 以下は一時的にコメントアウト
  /*
  if (!checkAuth(level)) {
    // 未認証 → パスワード入力モーダル表示
    showAuthModal(level);
    return false;
  }
  return true;
  */
}

// パスワード入力モーダルを表示
function showAuthModal(level) {
  const modal = document.getElementById('authModal');
  const modalTitle = document.getElementById('authModalTitle');
  const passwordInput = document.getElementById('authPassword');
  const errorMessage = document.getElementById('authError');
  
  if (!modal) return;
  
  // モーダルタイトルを設定
  if (level === 'veteran') {
    modalTitle.textContent = 'ベテラン探検隊以上限定ページ';
  } else if (level === 'egoist') {
    modalTitle.textContent = 'エゴイスト限定ページ';
  }
  
  // エラーメッセージをクリア
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';
  
  // パスワード入力欄をクリア
  passwordInput.value = '';
  
  // モーダルを表示
  modal.style.display = 'flex';
  passwordInput.focus();
  
  // 認証レベルをモーダルに保存
  modal.setAttribute('data-auth-level', level);
}

// パスワード入力モーダルを閉じる
function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// パスワード認証を実行
function submitAuth() {
  const modal = document.getElementById('authModal');
  const passwordInput = document.getElementById('authPassword');
  const errorMessage = document.getElementById('authError');
  
  if (!modal || !passwordInput) return;
  
  const level = modal.getAttribute('data-auth-level');
  const inputPassword = passwordInput.value;
  
  if (!inputPassword) {
    errorMessage.textContent = 'パスワードを入力してください';
    errorMessage.style.display = 'block';
    return;
  }
  
  if (authenticate(level, inputPassword)) {
    // 認証成功
    closeAuthModal();
    
    // 限定ページへ遷移
    if (level === 'veteran') {
      window.location.href = 'veteran/index.html';
    } else if (level === 'egoist') {
      window.location.href = 'egoist/index.html';
    }
  } else {
    // 認証失敗
    errorMessage.textContent = 'パスワードが正しくありません';
    errorMessage.style.display = 'block';
    passwordInput.value = '';
    passwordInput.focus();
  }
}

// Enterキーで認証
function handleAuthKeyPress(event) {
  if (event.key === 'Enter') {
    submitAuth();
  }
}

// モーダル外クリックで閉じる
function handleModalClick(event) {
  const modal = document.getElementById('authModal');
  if (event.target === modal) {
    closeAuthModal();
  }
}

// ページ読み込み時に認証チェック（限定ページ用）
function initAuthCheck(level) {
  if (!requireAuth(level)) {
    // 未認証の場合はページ内容を非表示
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.style.display = 'none';
    }
  }
}
