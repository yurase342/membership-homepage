// プランデータ（script.jsと同じ）
const plansData = [
    {
        id: 1,
        name: '🟦化石探検隊 🔰',
        price: 490,
        description: 'ここから、"俺"を見つける。',
        color: 'blue',
        features: [
            '限定Discordサーバー',
            '一般公開動画限定で先行公開',
            'メンバーシップ限定ライブ配信',
            'AIとエンタメとブルーロックを掛け合わせたAI布教'
        ],
        benefitsTitle: '探検隊の特典',
        benefits: [
            '限定Discordサーバー',
            '一般公開動画限定で先行公開',
            'メンバーシップ限定ライブ配信'
        ],
        featured: false
    },
    {
        id: 2,
        name: '🟨ベテラン探検隊',
        price: 1090,
        description: '"正解"は、自分で創る時代へ。',
        color: 'yellow',
        features: [
            '探検隊が受けられる特典すべて',
            'ベテラン探検隊以上限定対人特化Discordサーバー',
            'ベテラン探検隊以上限定ライブ配信',
            '対人攻略AIの配布'
        ],
        benefitsTitle: 'ベテラン探検隊の特典',
        explorerBenefits: [
            '限定Discordサーバー',
            '一般公開動画限定で先行公開',
            'メンバーシップ限定ライブ配信'
        ],
        benefits: [
            'ベテラン探検隊以上限定対人特化Discordサーバー',
            'ベテラン探検隊以上限定ライブ配信',
            '対人攻略AIの配布'
        ],
        featured: false
    },
    {
        id: 3,
        name: '🟥エゴイスト',
        price: 1990,
        description: '"お前の存在"を証明する場所だ',
        color: 'red',
        features: [
            '探検隊が受けられる特典すべて',
            'ベテラン探検隊が受けられる特典すべて',
            'YouTubeチャンネルの概要欄とホームページへの名前の記載',
            'エゴイスト限定の裏事情ホームページ',
            '対人攻略AI究極版の配布'
        ],
        benefitsTitle: 'エゴイストの特典',
        explorerBenefits: [
            '限定Discordサーバー',
            '一般公開動画限定で先行公開',
            'メンバーシップ限定ライブ配信'
        ],
        veteranBenefits: [
            'ベテラン探検隊以上限定対人特化Discordサーバー',
            'ベテラン探検隊以上限定ライブ配信',
            '対人攻略AIの配布'
        ],
        benefits: [
            'ホームページへの名前の記載',
            '対人攻略AI究極版の配布'
        ],
        featured: false
    }
];

// URLパラメータからプランIDを取得
function getPlanIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const planId = parseInt(urlParams.get('plan'));
    return planId || 1; // デフォルトは1
}

// 選択されたプランを表示
function displaySelectedPlan() {
    const planId = getPlanIdFromURL();
    const plan = plansData.find(p => p.id === planId) || plansData[0];
    
    const selectedPlanCard = document.getElementById('selectedPlanCard');
    
    // 特典リストを構築
    let allBenefits = [];
    if (plan.explorerBenefits) {
        allBenefits = allBenefits.concat(plan.explorerBenefits);
    }
    if (plan.veteranBenefits) {
        allBenefits = allBenefits.concat(plan.veteranBenefits);
    }
    if (plan.benefits) {
        allBenefits = allBenefits.concat(plan.benefits);
    }
    
    selectedPlanCard.innerHTML = `
        <h3 class="selected-plan-name">${plan.name}</h3>
        <div class="selected-plan-price">¥${plan.price.toLocaleString()}<span>/月</span></div>
        <p class="plan-description">${plan.description}</p>
        <ul class="plan-features">
            ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        ${allBenefits.length > 0 ? `
        <div class="plan-benefits" style="margin-top: 1.5rem;">
            <div class="plan-benefits-title">${plan.benefitsTitle || '特典'}</div>
            <ul class="plan-benefits-list">
                ${allBenefits.map(benefit => `<li>• ${benefit}</li>`).join('')}
            </ul>
        </div>
        ` : ''}
    `;
    
    // 価格を表示
    document.getElementById('planPrice').textContent = `¥${plan.price.toLocaleString()}`;
    document.getElementById('totalPrice').textContent = `¥${plan.price.toLocaleString()}`;
}

// カード番号のフォーマット
function formatCardNumber(value) {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
        return parts.join(' ');
    } else {
        return v;
    }
}

// 有効期限のフォーマット
function formatExpiryDate(value) {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
        return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
}

// バリデーション
function validateForm() {
    let isValid = true;
    
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const cardName = document.getElementById('cardName').value.trim();
    
    // カード番号の検証
    if (cardNumber.length < 13 || cardNumber.length > 19) {
        showError('cardNumber', 'cardNumberError');
        isValid = false;
    } else {
        hideError('cardNumber', 'cardNumberError');
    }
    
    // 有効期限の検証
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryRegex.test(expiryDate)) {
        showError('expiryDate', 'expiryDateError');
        isValid = false;
    } else {
        hideError('expiryDate', 'expiryDateError');
    }
    
    // CVVの検証
    if (cvv.length < 3 || cvv.length > 4) {
        showError('cvv', 'cvvError');
        isValid = false;
    } else {
        hideError('cvv', 'cvvError');
    }
    
    // カード名義人の検証
    if (cardName.length < 2) {
        showError('cardName', 'cardNameError');
        isValid = false;
    } else {
        hideError('cardName', 'cardNameError');
    }
    
    return isValid;
}

function showError(inputId, errorId) {
    document.getElementById(inputId).classList.add('error');
    document.getElementById(errorId).style.display = 'block';
}

function hideError(inputId, errorId) {
    document.getElementById(inputId).classList.remove('error');
    document.getElementById(errorId).style.display = 'none';
}

// フォーム送信
function handleSubmit(e) {
    e.preventDefault();
    
    if (validateForm()) {
        // 実際の実装では、ここで決済APIを呼び出す
        const planId = getPlanIdFromURL();
        const plan = plansData.find(p => p.id === planId) || plansData[0];
        
        alert(`${plan.name}プランへの変更手続きが完了しました！\n\n実際の実装では、ここで決済処理が行われます。`);
        
        // ホームページに戻る
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
}

// イベントリスナー
document.addEventListener('DOMContentLoaded', () => {
    displaySelectedPlan();
    
    // カード番号のフォーマット
    document.getElementById('cardNumber').addEventListener('input', (e) => {
        e.target.value = formatCardNumber(e.target.value);
    });
    
    // 有効期限のフォーマット
    document.getElementById('expiryDate').addEventListener('input', (e) => {
        e.target.value = formatExpiryDate(e.target.value);
    });
    
    // CVVは数字のみ
    document.getElementById('cvv').addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
    
    // フォーム送信
    document.getElementById('purchaseForm').addEventListener('submit', handleSubmit);
});
