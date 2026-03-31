// cssnotebookData.js
const notebookData = [
    {
        id: 'topic-css-basics',
        name: '1. CSS Basics & Selectors',
        isActive: true, 
        sections: [
            {
                title: 'Introduction & Selectors (Class, ID, Element)',
                theory: `CSS (Cascading Style Sheets) ka use HTML ko design karne ke liye hota hai. Hum HTML elements ko unke **Tag Name**, **Class** (\`.\`), ya **ID** (\`#\`) se select karke design karte hain. Class ek se zyada elements par lag sakti hai, par ID page me unique hoti hai.`,
                code: `<style>
  /* Element Selector */
  h2 { color: #2563eb; font-family: sans-serif; }
  
  /* Class Selector */
  .my-box { 
    background-color: #f3f4f6; 
    border: 2px dashed #9ca3af; 
    padding: 10px; 
    margin-bottom: 10px;
  }
  
  /* ID Selector */
  #special-text { 
    color: #ef4444; 
    font-weight: bold; 
    font-size: 20px;
  }
</style>

<h2>CSS Selectors Example</h2>
<div class="my-box">Ye box class selector se design hua hai.</div>
<div class="my-box">Ye bhi same class use kar raha hai.</div>
<p id="special-text">Ye text ID selector se lal aur bold hua hai!</p>`
            },
            {
                title: 'Pseudo-classes (:hover, :active)',
                theory: `Pseudo-classes tab kaam aati hain jab hum kisi element ke "State" ko target karte hain. Jaise jab mouse kisi button ke upar ho (\`:hover\`), ya jab us par click kiya ja raha ho (\`:active\`).`,
                code: `<style>
  .action-btn {
    background-color: #10b981;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }

  /* Hover State: Mouse upar aane par */
  .action-btn:hover {
    background-color: #059669;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  /* Active State: Click dabaye rakhne par */
  .action-btn:active {
    background-color: #047857;
    transform: scale(0.95);
  }
</style>

<button class="action-btn">Hover & Click Me!</button>`
            }
        ]
    },
    {
        id: 'topic-box-model',
        name: '2. The Box Model',
        isActive: false,
        sections: [
            {
                title: 'Margin, Padding & Border',
                theory: `HTML me har element ek "Box" ki tarah hota hai. Is box ke 4 hisse hote hain:
1. **Content:** Jisme text ya image hoti hai.
2. **Padding:** Content aur Border ke beech ki andar ki jagah.
3. **Border:** Box ke kinaare ki line.
4. **Margin:** Border ke bahar ki jagah (dusre boxes se doori).`,
                code: `<style>
  .box-model-demo {
    background-color: #bfdbfe; /* Andar ka color */
    width: 200px;
    
    /* Padding: Andar se phulayega */
    padding: 20px; 
    
    /* Border: Kinaare ki line */
    border: 5px solid #1d4ed8; 
    
    /* Margin: Bahar se dhakka dega */
    margin: 30px auto; /* auto se center hoga */
    
    text-align: center;
    font-family: sans-serif;
    font-weight: bold;
  }
</style>

<div style="border: 1px dashed red; padding: 1px;">
  <div class="box-model-demo">Content (Padding, Border aur Margin ke sath)</div>
</div>`
            },
            {
                title: 'Border Radius (Gol kinaare)',
                theory: `\`border-radius\` property ka use karke hum kisi bhi box ke sharp corners ko gol kar sakte hain. Agar iski value 50% kar di jaye aur box chaukour (square) ho, to wo bilkul gol (circle) ban jata hai.`,
                code: `<style>
  .rounded-box {
    background-color: #f59e0b;
    color: white;
    padding: 20px;
    border-radius: 15px; /* 15px ki golai */
    margin-bottom: 20px;
    text-align: center;
  }

  .circle {
    background-color: #ec4899;
    width: 100px;
    height: 100px;
    border-radius: 50%; /* Perfect Circle */
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
  }
</style>

<div class="rounded-box">Iske corners thode gol hain</div>
<div class="circle">Circle</div>`
            }
        ]
    },
    {
        id: 'topic-flexbox',
        name: '3. Flexbox Layout',
        isActive: false,
        sections: [
            {
                title: 'Display Flex & Justify Content',
                theory: `Flexbox modern CSS ka sabse taqatwar tool hai. Container ko \`display: flex;\` dene se uske andar ke saare items ek line me aa jate hain. \`justify-content\` horizontal alignment control karta hai (jaise center, space-between).`,
                code: `<style>
  .flex-container {
    display: flex;
    justify-content: space-between; /* Items ke beech barabar jagah */
    background-color: #e5e7eb;
    padding: 15px;
    border-radius: 8px;
  }
  
  .flex-item {
    background-color: #3b82f6;
    color: white;
    padding: 15px 25px;
    border-radius: 5px;
    font-weight: bold;
  }
</style>

<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>`
            },
            {
                title: 'Align Items (Vertical Alignment)',
                theory: `Agar container ki height zyada hai aur aapko items ko vertical center me lana hai, to \`align-items: center;\` ka use hota hai. Ye top-to-bottom alignment ke liye hai.`,
                code: `<style>
  .tall-container {
    display: flex;
    justify-content: center; /* Horizontal Center */
    align-items: center;     /* Vertical Center */
    height: 150px;           /* Badi height */
    background-color: #fce7f3;
    border: 2px dashed #db2777;
  }
  
  .center-box {
    background-color: #db2777;
    color: white;
    padding: 20px;
    border-radius: 8px;
  }
</style>

<div class="tall-container">
  <div class="center-box">Perfectly Centered Box!</div>
</div>`
            }
        ]
    },
    {
        id: 'topic-grid',
        name: '4. CSS Grid Layout',
        isActive: false,
        sections: [
            {
                title: 'Basic Grid Setup',
                theory: `CSS Grid 2D layouts (rows aur columns dono) banane ke liye best hai. \`grid-template-columns\` se hum batate hain ki ek line me kitne columns honge aur unki chaurai (width) kitni hogi. \`gap\` inke beech ki jagah tay karta hai.`,
                code: `<style>
  .grid-container {
    display: grid;
    /* 3 barabar columns banayega */
    grid-template-columns: repeat(3, 1fr); 
    gap: 15px; /* Boxes ke beech ka gap */
    background-color: #f3f4f6;
    padding: 15px;
  }

  .grid-item {
    background-color: #8b5cf6;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
  }
</style>

<div class="grid-container">
  <div class="grid-item">Box 1</div>
  <div class="grid-item">Box 2</div>
  <div class="grid-item">Box 3</div>
  <div class="grid-item">Box 4</div>
  <div class="grid-item">Box 5</div>
  <div class="grid-item">Box 6</div>
</div>`
            }
        ]
    },
    {
        id: 'topic-typography',
        name: '5. Typography & Colors',
        isActive: false,
        sections: [
            {
                title: 'Font Styling & Text Align',
                theory: `Text ko sundar banane ke liye hum \`font-family\`, \`line-height\`, \`letter-spacing\`, aur \`text-align\` jaisi properties ka use karte hain.`,
                code: `<style>
  .beautiful-text {
    font-family: 'Georgia', serif;
    color: #1f2937;
    font-size: 18px;
    line-height: 1.8; /* Lines ke beech ka gap */
    letter-spacing: 1px;
    text-align: justify; /* Text dono side se barabar */
    background: #fffedd;
    padding: 15px;
    border-left: 5px solid #eab308;
  }
</style>

<p class="beautiful-text">
  Ye text padhne me bahut aasan hai kyunki isme line-height aur letter-spacing ka sahi use kiya gaya hai. Border-left se isko ek quote (block) jaisa design diya gaya hai.
</p>`
            },
            {
                title: 'Gradients (Multi-color Backgrounds)',
                theory: `Ek solid color ki jagah aap 2 ya usse zyada colors ka mixture (Gradient) use kar sakte hain. \`linear-gradient\` ek direction me colors ko mix karta hai.`,
                code: `<style>
  .gradient-box {
    /* Blue se Purple ki taraf jata hua rang */
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    color: white;
    padding: 40px 20px;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }
</style>

<div class="gradient-box">
  Gradient Backgrounds are Awesome! ✨
</div>`
            }
        ]
    },
    {
        id: 'topic-effects',
        name: '6. Shadows & Effects',
        isActive: false,
        sections: [
            {
                title: 'Box Shadow & Text Shadow',
                theory: `Kise bhi element ko 3D look dene ke liye Shadows ka use hota hai. \`box-shadow\` dabbe ke peeche parchhai lagata hai, aur \`text-shadow\` text ke peeche.`,
                code: `<style>
  .shadow-card {
    background-color: white;
    padding: 25px;
    border-radius: 12px;
    /* X-offset, Y-offset, Blur, Color */
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.15);
    max-width: 300px;
    margin: 20px auto;
    text-align: center;
  }

  .shadow-text {
    font-size: 30px;
    color: #3b82f6;
    font-weight: bold;
    /* Neon glow effect text par */
    text-shadow: 0px 0px 8px rgba(59, 130, 246, 0.6);
  }
</style>

<div class="shadow-card">
  <h2 class="shadow-text">Glow Text</h2>
  <p>Is card ke peeche ek badiya si parchhai (box-shadow) hai jo isko page se upar utha hua dikhati hai.</p>
</div>`
            }
        ]
    },
    {
        id: 'topic-animations',
        name: '7. CSS Animations',
        isActive: false,
        sections: [
            {
                title: 'Transitions (Smooth changes)',
                theory: `Transitions ka use elements ke state change ko smooth banane ke liye hota hai. Jaise hover karne par button achanak bada na ho, balki aram se bada ho.`,
                code: `<style>
  .smooth-box {
    background-color: #f43f5e;
    color: white;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    /* Transition set karna: sab kuch 0.4 sec me hoga */
    transition: all 0.4s ease-in-out;
  }

  .smooth-box:hover {
    background-color: #10b981; /* Lal se hara hoga */
    transform: rotate(15deg) scale(1.2); /* Ghumega aur bada hoga */
    border-radius: 50%; /* Gol ho jayega */
  }
</style>

<div class="smooth-box">Hover Me!</div>`
            },
            {
                title: 'Keyframes (Loading Spinner)',
                theory: `Lagaataar chalne wale animation ke liye \`@keyframes\` ka use hota hai. Hum batate hain ki animation 0% par kaisa hoga aur 100% par kaisa, aur CSS usko chalata rehta hai.`,
                code: `<style>
  /* Animation ko define karna */
  @keyframes spin-animation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #e5e7eb; /* Halka border */
    border-top: 5px solid #3b82f6; /* Nila top border */
    border-radius: 50%; /* Gol aakar */
    /* Animation lagana: naam, samay, style, kitni baar chalega */
    animation: spin-animation 1s linear infinite;
    margin: 20px auto;
  }
</style>

<div class="spinner"></div>
<p style="text-align:center; color:#6b7280;">Loading...</p>`
            }
        ]
    }
];
