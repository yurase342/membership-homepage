// プランデータ
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
        featureDescriptions: {
            '限定Discordサーバー': [
                'ガチャ情報',
                'シークレットパック情報',
                '各ステータスの数値特化おすすめ編成',
                '各ランク分けされた質問箱',
                '普通の雑談（ネタバレありの雑談も含む）',
                '神引きしたガチャのスクショ共有',
                'グッズ自慢ができる場所',
                'クラブ募集ができる場所',
                'フレンドに出してほしいキャラクターの希望を共有する場'
            ],
            'AIとエンタメとブルーロックを掛け合わせたAI布教': [
                'キャラクターの性格などをAIに読み込ませる',
                'このキャラと恋愛をするならどういう攻略法をすればいいのかを分析',
                'ライブ配信などでみんなでワイワイ話しながら見ていく'
            ]
        },
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
        featureDescriptions: {
            'ベテラン探検隊以上限定対人特化Discordサーバー': [
                '新キャラ・新サポカの対人性能速報とガチャポートフォリオ情報',
                'YouTube動画の解説スライド配布',
                'ランキング100位アイコン獲得のためのアドバイスと数値指標',
                '編成相談・対抗編成紹介・編成質問スレッド',
                'おすすめスキル紹介と各ステータス別スキル育成編成',
                '練習試合依頼・ジャイアントキリングの意識ポイント・リプレイ添削'
            ],
            'ベテラン探検隊以上限定ライブ配信': [
                '対人攻略AIに含まれるスライドを使用した解説ライブ配信'
            ],
            '対人攻略AIの配布': [
                'パスやパスカット、編成などの情報を徹底的に入れ込んだAI',
                '解説用スライドが複数含まれている',
                'クイズ機能も搭載',
                '24時間365日ほぼいつでも質問にすぐに答えてくれる（最大の特徴）'
            ]
        },
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
        featureDescriptions: {
            'YouTubeチャンネルの概要欄とホームページへの名前の記載': [
                'YouTubeチャンネルの概要欄に名前を記載',
                'ホームページの「選ばれた者たち」セクションに名前を記載'
            ],
            '対人攻略AI究極版の配布': [
                'ベテラン探検隊以上限定で配布している対人攻略AIの究極版'
            ],
            'エゴイスト限定の裏事情ホームページ': [
                'エゴイストプランのメンバー限定で、特別な裏事情情報を公開しています'
            ]
        },
        featured: false
    }
];

// 最高ランクプランのメンバー（エゴイストプランのメンバー）
const eliteMembers = [];

// プランカードを生成
function renderPlans() {
    const plansGrid = document.getElementById('plansGrid');
    
    plansData.forEach(plan => {
        const planCard = document.createElement('div');
        planCard.className = `plan-card ${plan.featured ? 'featured' : ''} plan-${plan.color}`;
        
        const featuresHTML = plan.features.map(feature => `<li>${feature}</li>`).join('');
        
        planCard.innerHTML = `
            <h3 class="plan-name">${plan.name}</h3>
            <div class="plan-price">
                ¥${plan.price.toLocaleString()}<span>/月</span>
            </div>
            <p class="plan-description">${plan.description}</p>
            <ul class="plan-features">
                ${featuresHTML}
            </ul>
            <button class="change-plan-btn" onclick="goToPurchasePage(${plan.id})">
                プランを変更する
            </button>
        `;
        
        plansGrid.appendChild(planCard);
    });
}

// メンバーカードを生成
function renderMembers() {
    const membersGrid = document.getElementById('membersGrid');
    
    eliteMembers.forEach((member, index) => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        
        // メンバーのイニシャルを取得（最初の文字）
        const initial = member.charAt(0);
        
        memberCard.innerHTML = `
            <div class="member-icon">${initial}</div>
            <div class="member-name">${member}</div>
        `;
        
        membersGrid.appendChild(memberCard);
    });
}

// メンバーシップ登録ページに遷移
function goToPurchasePage(planId) {
    const plan = plansData.find(p => p.id === planId) || plansData[0];
    const planName = plan.name;
    
    // 確認ダイアログを表示
    const confirmed = confirm(`${planName}プランに変更しますか？\n\nOKを押すと、YouTubeのメンバーシップ登録ページに移動します。`);
    
    if (confirmed) {
        // YouTubeメンバーシップ登録ページに遷移
        window.location.href = 'https://www.youtube.com/channel/UC6a0pxiaFLA8KeuR8HOTFZA/join';
    }
}

// プランの特徴を生成
function renderPlanFeatures() {
    const planFeaturesGrid = document.getElementById('planFeaturesGrid');
    
    // 探検隊の特徴
    const explorerFeature = plansData.find(p => p.id === 1);
    if (explorerFeature && explorerFeature.featureDescriptions) {
        const featureCard = document.createElement('div');
        featureCard.className = 'plan-feature-card plan-feature-blue';
        
        let featuresHTML = '';
        
        // 限定Discordサーバー
        if (explorerFeature.featureDescriptions['限定Discordサーバー']) {
            const description = explorerFeature.featureDescriptions['限定Discordサーバー'];
            const descriptionHTML = Array.isArray(description) 
                ? `<ul class="plan-feature-list">${description.map(item => `<li>${item}</li>`).join('')}</ul>`
                : `<p class="plan-feature-description">${description}</p>`;
            
            featuresHTML += `
                <div class="plan-feature-item">
                    <h4 class="plan-feature-name">限定Discordサーバー</h4>
                    ${descriptionHTML}
                </div>
            `;
        }
        
        // AIとエンタメとブルーロックを掛け合わせたAI布教
        if (explorerFeature.featureDescriptions['AIとエンタメとブルーロックを掛け合わせたAI布教']) {
            const description = explorerFeature.featureDescriptions['AIとエンタメとブルーロックを掛け合わせたAI布教'];
            const descriptionHTML = Array.isArray(description) 
                ? `<ul class="plan-feature-list">${description.map(item => `<li>${item}</li>`).join('')}</ul>`
                : `<p class="plan-feature-description">${description}</p>`;
            
            featuresHTML += `
                <div class="plan-feature-item">
                    <h4 class="plan-feature-name">AIとエンタメとブルーロックを掛け合わせたAI布教</h4>
                    ${descriptionHTML}
                </div>
            `;
        }
        
        if (featuresHTML) {
            featureCard.innerHTML = `
                <h3 class="plan-feature-title">${explorerFeature.name}</h3>
                <div class="plan-feature-content">
                    ${featuresHTML}
                </div>
            `;
            
            planFeaturesGrid.appendChild(featureCard);
        }
    }
    
    // ベテラン探検隊の特徴
    const veteranFeature = plansData.find(p => p.id === 2);
    if (veteranFeature && veteranFeature.featureDescriptions) {
        const featureCard = document.createElement('div');
        featureCard.className = 'plan-feature-card plan-feature-yellow';
        
        let featuresHTML = '';
        
        // ベテラン探検隊以上限定対人特化Discordサーバー
        if (veteranFeature.featureDescriptions['ベテラン探検隊以上限定対人特化Discordサーバー']) {
            const description = veteranFeature.featureDescriptions['ベテラン探検隊以上限定対人特化Discordサーバー'];
            const descriptionHTML = Array.isArray(description) 
                ? `<ul class="plan-feature-list">${description.map(item => `<li>${item}</li>`).join('')}</ul>`
                : `<p class="plan-feature-description">${description}</p>`;
            
            featuresHTML += `
                <div class="plan-feature-item">
                    <h4 class="plan-feature-name">ベテラン探検隊以上限定対人特化Discordサーバー</h4>
                    ${descriptionHTML}
                </div>
            `;
        }
        
        // ベテラン探検隊以上限定ライブ配信
        if (veteranFeature.featureDescriptions['ベテラン探検隊以上限定ライブ配信']) {
            const description = veteranFeature.featureDescriptions['ベテラン探検隊以上限定ライブ配信'];
            const descriptionHTML = Array.isArray(description) 
                ? `<ul class="plan-feature-list">${description.map(item => `<li>${item}</li>`).join('')}</ul>`
                : `<p class="plan-feature-description">${description}</p>`;
            
            featuresHTML += `
                <div class="plan-feature-item">
                    <h4 class="plan-feature-name">ベテラン探検隊以上限定ライブ配信</h4>
                    ${descriptionHTML}
                </div>
            `;
        }
        
        // 対人攻略AIの配布
        if (veteranFeature.featureDescriptions['対人攻略AIの配布']) {
            const description = veteranFeature.featureDescriptions['対人攻略AIの配布'];
            const descriptionHTML = Array.isArray(description) 
                ? `<ul class="plan-feature-list">${description.map(item => `<li>${item}</li>`).join('')}</ul>`
                : `<p class="plan-feature-description">${description}</p>`;
            
            featuresHTML += `
                <div class="plan-feature-item">
                    <h4 class="plan-feature-name">対人攻略AIの配布</h4>
                    ${descriptionHTML}
                </div>
            `;
        }
        
        if (featuresHTML) {
            featureCard.innerHTML = `
                <h3 class="plan-feature-title">${veteranFeature.name}</h3>
                <div class="plan-feature-content">
                    ${featuresHTML}
                </div>
            `;
            
            planFeaturesGrid.appendChild(featureCard);
        }
    }
    
    // エゴイストの特徴
    const egoistFeature = plansData.find(p => p.id === 3);
    if (egoistFeature && egoistFeature.featureDescriptions) {
        const featureCard = document.createElement('div');
        featureCard.className = 'plan-feature-card plan-feature-red';
        
        let featuresHTML = '';
        
        // YouTubeチャンネルの概要欄とホームページへの名前の記載
        if (egoistFeature.featureDescriptions['YouTubeチャンネルの概要欄とホームページへの名前の記載']) {
            const description = egoistFeature.featureDescriptions['YouTubeチャンネルの概要欄とホームページへの名前の記載'];
            const descriptionHTML = Array.isArray(description) 
                ? `<ul class="plan-feature-list">${description.map(item => `<li>${item}</li>`).join('')}</ul>`
                : `<p class="plan-feature-description">${description}</p>`;
            
            featuresHTML += `
                <div class="plan-feature-item">
                    <h4 class="plan-feature-name">YouTubeチャンネルの概要欄とホームページへの名前の記載</h4>
                    ${descriptionHTML}
                </div>
            `;
        }
        
        // 対人攻略AI究極版の配布
        if (egoistFeature.featureDescriptions['対人攻略AI究極版の配布']) {
            const description = egoistFeature.featureDescriptions['対人攻略AI究極版の配布'];
            const descriptionHTML = Array.isArray(description) 
                ? `<ul class="plan-feature-list">${description.map(item => `<li>${item}</li>`).join('')}</ul>`
                : `<p class="plan-feature-description">${description}</p>`;
            
            featuresHTML += `
                <div class="plan-feature-item">
                    <h4 class="plan-feature-name">対人攻略AI究極版の配布</h4>
                    ${descriptionHTML}
                </div>
            `;
        }
        
        // エゴイスト限定の裏事情ホームページ
        if (egoistFeature.featureDescriptions['エゴイスト限定の裏事情ホームページ']) {
            const description = egoistFeature.featureDescriptions['エゴイスト限定の裏事情ホームページ'];
            const descriptionHTML = Array.isArray(description) 
                ? `<ul class="plan-feature-list">${description.map(item => `<li>${item}</li>`).join('')}</ul>`
                : `<p class="plan-feature-description">${description}</p>`;
            
            featuresHTML += `
                <div class="plan-feature-item">
                    <h4 class="plan-feature-name">エゴイスト限定の裏事情ホームページ</h4>
                    ${descriptionHTML}
                </div>
            `;
        }
        
        if (featuresHTML) {
            featureCard.innerHTML = `
                <h3 class="plan-feature-title">${egoistFeature.name}</h3>
                <div class="plan-feature-content">
                    ${featuresHTML}
                </div>
            `;
            
            planFeaturesGrid.appendChild(featureCard);
        }
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
    renderPlans();
    renderMembers();
    renderPlanFeatures();
    
    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // モバイルメニューを閉じる
                const navMenu = document.getElementById('navMenu');
                const navToggle = document.getElementById('navToggle');
                if (navMenu && navMenu.classList.contains('nav-menu-active')) {
                    navMenu.classList.remove('nav-menu-active');
                    navToggle.classList.remove('nav-toggle-active');
                }
            }
        });
    });

    // ハンバーガーメニューのトグル
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav-menu-active');
            navToggle.classList.toggle('nav-toggle-active');
        });
    }
});
