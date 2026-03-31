// notebookData.js
const notebookData = [
    {
        id: 'topic-html-basics',
        name: 'HTML Basics',
        isActive: true, 
        sections: [
            {
                title: '1. Basic Structure (Headings & Paragraphs)',
                theory: `Website par bada text likhne ke liye **Heading** aur normal text ke liye **Paragraph** tag lagate hain.

Iske alawa, HTML seekhna bahut aasan hai. Aap isme vibhinn prakar ke tags ka upyog karke ek behtareen webpage bana sakte hain. Text ko format karna, images lagana, aur forms banana isme bahut hi saral prakriya hai. HTML web development ki pehli seedhi hai jise har programmer ko seekhna padta hai. Iske bina internet par websites ki kalpana karna mushkil hai aur HTML har website ka aadhar hota hai.`,
                code: `<h1>Main Heading</h1>
<h2>Choti Heading</h2>
<p>Yeh ek paragraph hai. Isme hum jaankari likhte hain joki thodi lambi bhi ho sakti hai bina enter dabaye dekhte hain wrap hoti hai ya nahi.</p>`
            },
            {
                title: '2. Text Formatting (Bold, Italic)',
                theory: `Text ko alag tarike se highlight ya design karne ke tags. Example: **Bold**, *Italic*, and \`Underlined\`.`,
                code: `<p><b>Bold Text</b> - Mota text</p>
<p><i>Italic Text</i> - Tircha text</p>
<p><u>Underlined Text</u> - Line wala</p>`
            },
            {
                title: '3. Links & Images (Photo aur Link)',
                theory: `Clickable link banane ke liye aur page par photo dikhane ke liye hum \`<a>\` tag aur \`<img>\` tag ka upyog karte hain.`,
                code: `<a href="#" onclick="event.preventDefault(); alert('Link clicked!');">Click Here</a>
<br><br>
<img src="https://picsum.photos/200/100" alt="Random Photo">`
            },
            {
                title: '4. Forms (Input Box & Buttons)',
                theory: `User se details lene ke liye form ka use kiya jata hai. Form ke andar input boxes aur submit button hote hain.`,
                code: `<form onsubmit="event.preventDefault(); alert('Form Submitted!');">
  <div class="form-group">
    <label>Naam:</label>
    <input type="text" placeholder="Naam likhe">
  </div>
  <button type="submit" class="btn">Bhejein</button>
</form>`
            }
        ]
    },
    {
        id: 'topic-metadata',
        name: 'Metadata',
        isActive: false,
        sections: [
            {
                title: 'Metadata Introduction',
                theory: `Head tag ke andar metadata rakha jata hai. Jisme webpage ki jankari, jaise \`<title>\` aur character set define hota hai.`,
                code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Mera Webpage</title>
</head>
<body>
</body>
</html>`
            }
        ]
    },
    {
        id: 'topic-all-html-names',
        name: 'All HTML Names',
        isActive: false,
        sections: [
            {
                title: 'HTML Tags List',
                theory: `HTML me bahut saare elements hote hain jinhe Tags kaha jata hai. Har tag ka apna ek unique function hota hai.`,
                code: `<ul>
  <li>div</li>
  <li>span</li>
  <li>header</li>
  <li>footer</li>
</ul>`
            }
        ]
    },
    {
        id: 'topic-input-type',
        name: 'Input Type',
        isActive: false,
        sections: [
            {
                title: 'Various Input Types',
                theory: `Form input me alag alag prakar ka data lene ke liye \`type\` attribute use hota hai. Jese ki text, password, email, number etc.`,
                code: `<input type="text" placeholder="Username">
<input type="password" placeholder="Password">
<input type="email" placeholder="Email">`
            }
        ]
    },
    {
        id: 'topic-html-js',
        name: 'HTML Attributes in JS',
        isActive: false,
        sections: [
            {
                title: 'JS Event Attributes',
                theory: `HTML tags par directly javascript run karne ke liye events ka use kiya jata hai jaise \`onclick\`, \`onmouseover\`, \`onchange\` wagaira.`,
                code: `<button onclick="alert('Hello World')">Click Me!</button>`
            }
        ]
    }
];
