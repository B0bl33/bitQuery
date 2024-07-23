document.getElementById('toggle-header').addEventListener('click', function() {
    document.querySelector('header').classList.toggle('show');
});

const chapterButtons = document.querySelectorAll('.chapter-button');
const progress = document.querySelector('.progress');
const markers = document.querySelectorAll('.marker');
const chapterTitle = document.getElementById('chapter-title');
const chapterContent = document.getElementById('chapter-content');

const chapters = {
    1: {
        title: "Introduction to Bitcoin",
        content: `
            <h3>What is Bitcoin?</h3>
            <p>Bitcoin is a revolutionary form of digital currency, created in 2009 by an anonymous entity known as Satoshi Nakamoto. Unlike traditional currencies issued by governments and central banks, Bitcoin operates on a decentralized network using peer-to-peer technology. This allows users to send and receive payments without the need for intermediaries like banks or financial institutions.</p>
            <h3>How Does Bitcoin Work?</h3>
            <p>Bitcoin operates on a technology called blockchain. A blockchain is a public, decentralized ledger that records all Bitcoin transactions. Each transaction is grouped into a block, which is then linked to the previous block, forming a chain of blocks. This ensures the integrity and chronological order of transactions, making it nearly impossible to alter past records.</p>
            <h3>Blockchain Technology</h3>
            <ul>
                <li><b>Decentralized Ledger:</b> The blockchain is maintained by a network of computers (nodes) that validate and record transactions. This decentralized nature ensures no single entity has control over the entire network, enhancing security and trust.</li>
                <li><b>Transparency and Security:</b> Each transaction is transparent and can be viewed by anyone on the network, while the identities of the parties involved remain pseudonymous. The security of the blockchain is fortified through cryptographic techniques, ensuring data integrity and protection against fraud.</li>
            </ul>
            <h3>Mining</h3>
            <ul>
                <li><b>Transaction Validation:</b> Bitcoin transactions are validated through a process called mining. Miners use powerful computers to solve complex mathematical problems, which in turn verify the transactions and add them to the blockchain.</li>
                <li><b>Incentives:</b> Miners are rewarded with new bitcoins for their efforts, providing an incentive to maintain and secure the network. This process also introduces new bitcoins into circulation at a controlled and predictable rate.</li>
            </ul>
            <h3>Key Features of Bitcoin</h3>
            <ul>
                <li><b>Digital Currency:</b> Bitcoin exists purely in digital form, unlike physical money. This makes it highly portable and divisible, allowing users to send small or large amounts with ease.</li>
                <li><b>Decentralization:</b> One of Bitcoin's most significant features is its decentralization. There is no central authority or institution controlling Bitcoin, making it resistant to censorship and governmental control. This decentralization is achieved through its distributed network of nodes.</li>
                <li><b>Peer-to-Peer Transactions:</b> Bitcoin allows for direct transactions between users without intermediaries. This peer-to-peer network reduces transaction costs and speeds up the transfer process, especially for international payments.</li>
                <li><b>Limited Supply:</b> Bitcoin has a capped supply of 21 million coins. This scarcity is designed to mimic precious metals like gold, providing a hedge against inflation and preserving value over time.</li>
                <li><b>Security and Immutability:</b> Transactions recorded on the Bitcoin blockchain are immutable, meaning once they are confirmed, they cannot be altered or deleted. This ensures a high level of security and trust in the system.</li>
            </ul>
            <h3>Why Bitcoin Matters</h3>
            <p>Bitcoin represents a paradigm shift in the world of finance. It offers an alternative to traditional financial systems, providing a decentralized, secure, and transparent way to store and transfer value. This innovation has far-reaching implications for global finance, potentially offering financial inclusion to those without access to traditional banking systems and creating a more open and equitable financial world.</p>
            <p>By understanding Bitcoin and its underlying technology, you are not just learning about a new form of money; you are gaining insight into the future of financial systems and the transformative power of blockchain technology.</p>
        `
    },
    2: {
        title: "Bitcoin's Market Dominance and Influence",
        content: `
            <h3>Explanation of Bitcoin's Market Dominance</h3>
            <p>Bitcoin, introduced in 2009 by the pseudonymous Satoshi Nakamoto, is the pioneering cryptocurrency that has set the standard for the digital currency market. Its market dominance can be attributed to several key factors:</p>
            <ul>
              <li><b>First-Mover Advantage:</b> As the first cryptocurrency, Bitcoin established itself early as a trustworthy and widely recognized digital asset, securing a significant user base and network effect.</li>
              <li><b>Largest Market Capitalization:</b> Bitcoin consistently holds the largest market capitalization in the crypto space. This significant market cap provides stability and acts as a benchmark for other cryptocurrencies.</li>
              <li><b>High Liquidity:</b> Bitcoin's high liquidity means it can be easily bought and sold on numerous exchanges globally, making it a preferred choice for both retail and institutional investors.</li>
              <li><b>Robust Security:</b> Bitcoin's decentralized network, maintained by thousands of nodes and miners, ensures its security and resistance to attacks, making it one of the most secure networks.</li>
              <li><b>Brand Recognition:</b> Bitcoin is the most recognized and trusted cryptocurrency, often referred to as "digital gold." Its brand recognition surpasses all other cryptocurrencies, making it synonymous with the term "cryptocurrency."</li>
            </ul>
            <h3>How Bitcoins Movements Influence the Broader Crypto Marke</h3>
            <p>Bitcoin's price movements significantly impact the broader cryptocurrency market due to its dominance and the psychological influence it exerts on investors. Here's how:</p>
            <ul>
              <li><b>Psychological Impact:</b> Bitcoin is often seen as a bellwether for the entire crypto market. When Bitcoin's price rises, it boosts investor confidence, leading to increased investment in other cryptocurrencies (altcoins). Conversely, when Bitcoin's price falls, it often triggers a market-wide sell-off.</li>
              <li><b>Liquidity Provider:</b> Many altcoins are traded against Bitcoin. Fluctuations in Bitcoin’s price affect the value of these altcoin trading pairs, thereby influencing their market prices.</li>
              <li><b>Market Sentiment:</b> Bitcoin's performance acts as a barometer for the overall health of the cryptocurrency market. Positive news or developments regarding Bitcoin, such as regulatory approvals or institutional investments, often lead to bullish sentiment across the market.</li>
              <li><b>Investment Allocation:</b> Institutional investors often allocate funds to Bitcoin first before diversifying into altcoins. Thus, Bitcoin's price movements can dictate the flow of capital into or out of the altcoin market.</li>
            </ul>
            <h3>Real-World Examples of Altcoins Reacting to Bitcoin’s Trends</h3>
            <uL>
              <li><b>2017 Bull Run:</b> Bitcoin’s significant bull run in late 2017, reaching an all-time high near $20,000, led to a massive influx of capital into the crypto market. Altcoins like Ethereum (ETH), Ripple (XRP), and Litecoin (LTC) experienced substantial price increases as investor enthusiasm spilled over from Bitcoin.</li>
              <li><b>2018 Bear Market:</b> After Bitcoin’s peak in 2017, its sharp decline in 2018 triggered a prolonged bear market. Altcoins mirrored this trend, with many losing a significant portion of their value, demonstrating the strong correlation between Bitcoin’s performance and the broader market sentiment.</li>
              <li><b>2020-2021 Bull Run:</b> The Bitcoin halving in May 2020 set the stage for another bull run. As Bitcoin’s price surged to new heights, breaking the $60,000 barrier in early 2021, altcoins also rallied. Ethereum hit new all-time highs, and other projects like Cardano (ADA) and Binance Coin (BNB) saw massive gains, driven by increased investor interest and market optimism.</li>
              <li><b>Regulatory News Impact:</b> In 2021, when China announced a crackdown on Bitcoin mining, Bitcoin's price dropped significantly. This news led to a market-wide downturn affecting altcoins as well, showcasing the ripple effect of Bitcoin’s regulatory challenges on the broader market.</li>
            </ul>
            <h3>Conclusion</h3>
            <p>Bitcoin's market dominance and influence are pivotal in understanding the broader cryptocurrency market. Its role as the leading cryptocurrency makes it a key driver of market trends and investor sentiment. By observing Bitcoin's movements, investors can gain insights into potential market directions and make informed decisions about their altcoin investments. This interconnected dynamic underscores the importance of Bitcoin within the evolving landscape of digital currencies, as elaborated in "The Bitcoin Paradox."</p>
        `
    },
    3: {
        title: "Understanding and Predicting Bitcoin’s Movements",
        content: `
            <h3>Importance of Predicting Bitcoin’s Price Movements</h3>
            <p>Predicting Bitcoin’s price movements is crucial for investors and traders aiming to maximize their returns and minimize risks. Given Bitcoin's significant market influence, understanding its price patterns can provide valuable insights into the broader cryptocurrency market. By accurately anticipating Bitcoin’s movements, investors can make informed decisions about when to buy or sell, optimizing their investment strategies.</p>
            <p>Key reasons why predicting Bitcoin's price movements is important include:</p>
            <ul>
              <li><b>Investment Optimization:</b> Accurate predictions help investors maximize profits by buying low and selling high.</li>
              <li><b>Risk Management:</b> Understanding potential price fluctuations allows investors to mitigate risks and avoid significant losses.</li>
              <li><b>Market Strategy:</b> Knowledge of Bitcoin’s trends enables better planning for entry and exit points in both Bitcoin and altcoin investments.</li>
            </ul>
            <h3>Overview of Historical Price Trends and Key Events Influencing Bitcoin</h3>
            <p>Bitcoin’s price history is marked by distinct patterns and key events that have significantly influenced its value. Here’s an overview of these trends and events:</p>
            <h4>Early Growth and Initial Surge (2009-2013):</h4>
            <ul>
              <li><b>Inception:</b> Bitcoin was created in 2009 and initially traded for mere cents.</li>
              <li><b>First Major Surge:</b> In 2013, Bitcoin’s price surged to over $1,000, driven by increased media attention and early adopter interest.</li>
            </ul>
            <h4>Boom and Bust Cycles (2013-2016):</h4>
            <ul>
              <li><b>2013 Peak and Crash:</b> After reaching $1,000, Bitcoin's price crashed, dropping to around $200 by early 2015 due to regulatory concerns and market corrections.</li>
              <li><b>Steady Growth:</b> Between 2015 and 2016, Bitcoin experienced steady growth, recovering from previous lows.</li>
            </ul>
            <h4>2017 Bull Run:</h4>
            <ul>
              <li><b>Record High:</b> Bitcoin’s price skyrocketed to nearly $20,000 in December 2017, fueled by widespread media coverage, increased institutional interest, and the rise of ICOs (Initial Coin Offerings).</li>
            </ul>
            <h4>2018 Decline:</h4>
            <ul>
            <li><b>Decline:</b> In 2018, Bitcoin’s price plummeted, dropping below $4,000 by the end of the year. This decline was attributed to regulatory crackdowns, market corrections, and the bursting of the ICO bubble.</li>
            </ul>
            <h4>2020-2021 Bull Run:</h4>
            <ul>
            <li><b>Halving Event:</b> The May 2020 Bitcoin halving event reduced the block reward, creating a supply shock that contributed to a new bull run.</li>
            <li><b>All-Time High:</b> Bitcoin reached an all-time high of over $60,000 in April 2021, driven by institutional investment, increased adoption, and macroeconomic factors such as inflation concerns.</li>
            </ul>
            <h4>Recent Trends (2022-Present):</h4>
            <ul>
              <li><b>Market Volatility:</b> Bitcoin has experienced significant volatility, with prices fluctuating due to regulatory news, macroeconomic events, and market sentiment.</li>
              <li><b>Institutional Adoption:</b> Continued institutional adoption and developments in Bitcoin ETFs have influenced market dynamics.</li>
            </ul>
            <h3>How Bitcoin’s Price Patterns Impact Market Sentiment</h3>
            <p>Bitcoin’s price patterns have a profound impact on market sentiment, influencing investor behavior and overall market trends. Here’s how these patterns affect sentiment:</p>
            <h4>Bullish Sentiment:</h4>
            <p><b>Rising Prices:</b> When Bitcoin’s price increases, it often leads to a bullish sentiment in the market. Investors feel optimistic, leading to increased buying activity and higher prices for altcoins.</p>
            <p><b>Media Coverage:</b> Positive news and media coverage amplify bullish sentiment, attracting more investors and driving prices further up.</p>
            <h4>Bearish Sentiment:</h4>
            <p><b>Falling Prices:</b> Conversely, when Bitcoin’s price declines, it creates a bearish sentiment. Investors become cautious or panic, leading to widespread selling and a decrease in altcoin prices.</p>
            <p><b>Negative News:</b> Regulatory crackdowns, security breaches, or other negative news can exacerbate bearish sentiment, causing significant market downturns.</p>
            <h4>Market Cycles:</h4>
            <p><b>Predictable Patterns:</b> Bitcoin’s historical price movements often follow cyclical patterns, including periods of rapid growth (bull markets) followed by corrections (bear markets). Understanding these cycles helps investors anticipate market changes and adjust their strategies accordingly.</p>

            <p>Understanding and predicting Bitcoin’s price movements are essential for navigating the cryptocurrency market effectively. By studying historical trends and key events, investors can gain insights into potential future price movements and market sentiment. This knowledge, combined with an understanding of Bitcoin’s market dominance, provides a solid foundation for making informed investment decisions, as detailed in "The Bitcoin Paradox."</P>
        `
    },
    4: {
        title: "The Halving Cycle: A Predictable Pattern",
        content: `
            <h3>Detailed Explanation of the Bitcoin Halving Cycle</h3>
            <p>The Bitcoin halving cycle is a fundamental aspect of Bitcoin's economic model, designed to control its supply and create a deflationary asset. The halving event occurs approximately every four years, or every 210,000 blocks mined. During a halving, the reward for mining new Bitcoin blocks is reduced by 50%. This process ensures that the total supply of Bitcoin is capped at 21 million, a feature that enhances its scarcity over time.</p>
            <h4>Key points about the Bitcoin halving cycle:</h4>
            <p><b>Fixed Supply:</b> Bitcoin's total supply is limited to 21 million coins. The halving process reduces the rate at which new Bitcoins are created, slowing down the expansion of the supply.</p>
            <p><b>Mining Rewards:</b> Initially, miners received 50 BTC per block. This reward has halved several times: to 25 BTC in 2012, 12.5 BTC in 2016, and 6.25 BTC in 2020. The next halving is expected in 2024, reducing the reward to 3.125 BTC.</p>
            <p><b>Economic Impact:</b> By reducing the supply of new Bitcoins, the halving creates a scarcity effect, which can lead to increased demand and higher prices, assuming demand remains constant or increases.</p>
            <h4>Historical Impact of Halving Events on Bitcoin’s Price</h4>
            <p>Bitcoin's halving events have historically had a significant impact on its price. Each halving has been followed by a substantial increase in Bitcoin’s market value, often leading to new all-time highs. Here’s a closer look at the historical impacts:</p>
            <h4>First Halving (2012):</h4>
            <ul>
              <li><b>Date:</b> November 28, 2012</li>
              <li><b>Pre-Halving Price:</b> $12</li>
              <li><b>Post-Halving Peak:</b> $1,150 (December 2013)</li>
              <li><b>Impact:</b> The first halving saw Bitcoin’s price increase by approximately 8,868% within a year.</li>
            </ul>
            <h4>Second Halving (2016):</h4>
            <ul>
              <li><b>Date:</b> July 9, 2016</li>
              <li><b>Pre-Halving Price:</b> $650</li>
              <li><b>Post-Halving Peak:</b> $19,500 (December 2017)</li>
              <li><b>Impact:</b> The second halving led to a price increase of around 2,900% over the following 18 months.</li>
            </ul>
            <h4>Third Halving (2020):</h4>
            <ul>
              <li><b>Date:</b> May 11, 2020</li>
              <li><b>Pre-Halving Price:</b> $8,450</li>
              <li><b>Post-Halving Peak:</b> $69,000 (November 2021)</li>
              <li><b>Impact:</b> The third halving resulted in a price increase of about 716% over the subsequent 18 months.</li>
            </ul>
            <h3>Why the Halving Cycle is Crucial for Predicting Market Trends</h3>
            <p>The halving cycle is crucial for predicting market trends because it creates a predictable supply shock, which can influence market behavior and investor sentiment. Here’s why it’s important:</p>
            <p><b>Supply and Demand Dynamics:</b> Each halving reduces the supply of new Bitcoins entering the market, which, assuming steady or increasing demand, can drive up prices. This predictable reduction in supply helps investors anticipate potential price increases.</p>
            <p><b>Market Sentiment:</b> The anticipation of halving events often leads to increased media coverage and investor interest, creating bullish sentiment that can drive price rallies before and after the halving.</p>
            <p><b>Investment Strategy:</b> Understanding the halving cycle allows investors to time their market entries and exits more effectively. Historical data suggests that significant price increases typically occur within 12-18 months following a halving, providing a strategic window for investment.</p>
            <p><b>Long-Term Planning:</b> For long-term investors, the halving cycle offers a framework for understanding Bitcoin’s potential value trajectory and planning their investment horizon accordingly.</p>
            <p>The Bitcoin halving cycle is a fundamental mechanism that drives Bitcoin's scarcity and influences its market value. By understanding the historical impact of halving events and the predictable nature of the halving cycle, investors can make informed decisions and strategically plan their investments. This knowledge, as explored in "The Bitcoin Paradox," is essential for navigating the volatile yet lucrative world of Bitcoin and cryptocurrency investments.</p>
        `
    },
    5: {
        title: "Timing Altcoin Investments with Bitcoin’s Cycles",
        content: `
            <h3>Strategies for Leveraging the Bitcoin Halving Cycle to Time Altcoin Investments</h3>
            <p>Leveraging the Bitcoin halving cycle to time altcoin investments can significantly enhance your chances of success in the volatile crypto market. Here’s a step-by-step strategy to help you navigate this process:</p>
            <h3>Understand the Halving Timeline:</h3>
            <p>Identify the next Bitcoin halving date and understand its historical impact on Bitcoin's price. Typically, the halving occurs every four years, with the next one expected in 2028. Bitcoin usually experiences a price increase leading up to the halving and continues to rise for several months post-halving and you must study this pattern until you can see it.</p>
            <h3> Monitor Pre-Halving Trends:</h3>
            <p><b>Accumulate Bitcoin:</b> Investors often accumulate Bitcoin in the months leading up to the halving, anticipating a price rise. This period usually shows increased buying activity and upward price momentum.</p>
            <p><b>Prepare for Altcoin Investments:</b> As Bitcoin’s price rises, altcoins often lag behind but eventually follow the trend. Monitor Bitcoin's performance and prepare to shift investments into altcoins when Bitcoin starts showing strong upward momentum.</p>
            <h3>Post-Halving Strategy:</h3>
            <p><b>Peak Timing:</b> Historically, Bitcoin tends to peak around 12-18 months after the halving. Use this information to plan your investment horizon and prepare for potential market corrections.</p>
            <p><b>Shift to Altcoins:</b> As Bitcoin approaches its peak, capital often flows into altcoins, leading to significant price increases in the altcoin market. Timing this shift correctly can maximize returns.</p>
            <h3>Understanding the Ripple Effect: How Bitcoin’s Cycles Impact Altcoin Prices</h3>
            <p>Bitcoin's price movements have a profound ripple effect on the broader cryptocurrency market, significantly influencing altcoin prices. Here’s how this impact unfolds:</p>
            <p><b>Positive Sentiment:</b> A bullish Bitcoin market generally creates a positive sentiment across the crypto market. As Bitcoin’s price rises, investor confidence increases, leading to higher investments in altcoins.</p>
            <p><b>Negative Sentiment:</b> Conversely, a bearish Bitcoin market can lead to panic selling and reduced investments in altcoins, dragging their prices down.</p>
            <p><b>Bitcoin Dominance:</b> During periods of significant Bitcoin price increases, investors often focus on Bitcoin, causing a rise in its market dominance. This can temporarily lead to stagnation or a decline in altcoin prices.</p>
            <p><b>Diversification:</b> As Bitcoin’s price stabilizes or peaks, investors seek higher returns by diversifying into altcoins. This influx of capital can lead to substantial price increases in the altcoin market.</p>
            <p><b>Trading Pairs:</b> Many altcoins are traded against Bitcoin. Fluctuations in Bitcoin’s price directly affect these trading pairs, influencing the value and trading volume of altcoins.</p>
            <h3>Examples of Timing Investments Based on Past Halving Cycles</h3>
            <h4>2016-2017 Cycle:</h4>
            <p><b>Bitcoin Halving (July 2016):</b> Bitcoin’s price was around $650. Post-halving, it rose to $19,500 by December 2017.</p>
            <p><b>Altcoin Boom:</b> During Bitcoin’s rise, altcoins like Ethereum (ETH) and Ripple (XRP) experienced substantial growth. Ethereum went from $10 in early 2016 to over $1,400 by January 2018.</p>
            <h4>2020-2021 Cycle:</h4>
            <p><b>Bitcoin Halving (May 2020):</p> Bitcoin’s price was around $8,450. It surged to over $60,000 by April 2021.</p>
            <p><b>Altcoin Rally:</b> Following Bitcoin’s lead, altcoins saw dramatic price increases. Cardano (ADA) rose from $0.05 in early 2020 to over $2.00 by mid-2021. Binance Coin (BNB) also saw significant gains, from around $15 to over $600 during the same period.</p>
            <p><i>Timing altcoin investments around Bitcoin’s halving cycles can be a highly effective strategy for maximizing returns. By understanding the halving cycle, monitoring Bitcoin’s price trends, and recognizing the ripple effect on altcoins, investors can strategically position themselves to capitalize on market movements. This knowledge, combined with insights from "The Bitcoin Paradox," provides a robust framework for navigating the crypto market successfully.</i></p>
        `
    },
    6: {
        title: "Building a Successful Crypto Investment Strategy",
        content: `
            <h3>Combining Knowledge of Bitcoin’s Influence and Halving Cycle for Informed Investment Decisions</h3>
            <p>To build a successful crypto investment strategy, it’s essential to leverage your understanding of Bitcoin’s market dominance and the significance of its halving cycle. Bitcoin often sets the trend for the entire cryptocurrency market. By closely monitoring its behavior, you can gain valuable insights into potential market movements. Recognizing the patterns from previous Bitcoin cycles, especially the halving events that occur approximately every four years, can guide your investment decisions. Historically, Bitcoin experiences a significant price increase leading up to and following its halving events due to the reduction in supply. By accumulating Bitcoin before the halving and planning your investments accordingly, you can position yourself to benefit from these predictable cycles.</p>
            <h3>Importance of Diversification and Risk Management in Crypto Investing</h3>
            <p>Diversification and risk management are critical to navigating the volatile nature of the cryptocurrency market. Diversifying your portfolio means spreading your investments across multiple cryptocurrencies and sectors to reduce risk. Instead of investing solely in Bitcoin, consider also investing in Ethereum and other promising altcoins, as well as exploring projects in decentralized finance (DeFi), non-fungible tokens (NFTs), and blockchain infrastructure. This approach helps mitigate the risk associated with any single asset.</p>
            <p>Effective risk management involves setting strategies to protect your investments. One such strategy is using stop-loss orders to automatically sell assets when their price drops to a certain level, thereby limiting potential losses. Regularly reviewing and adjusting your portfolio based on market conditions is also essential. Furthermore, it’s crucial to only invest what you can afford to lose, given the crypto market's inherent volatility.</p>
            <h3>Final Tips for Staying Updated with Market Trends and Continuous Learning</h3>
            <p>Staying informed and continuously learning are essential components of a successful crypto investment strategy. Keeping up with market trends involves following reputable news sources and engaging with online crypto communities on platforms like Twitter, Reddit, and Telegram. These communities often share valuable insights and updates that can help you stay ahead of market movements.</p>
            <p>Utilizing market analysis tools such as TradingView for technical analysis and CoinMarketCap for tracking market data can provide deeper insights into market trends. Additionally, continuous learning is vital in the ever-evolving crypto landscape. Reading whitepapers, enrolling in online courses and webinars, and participating in crypto conferences can deepen your understanding and keep you informed about the latest developments and technologies in the field.</p>
            <p>Building a successful crypto investment strategy requires a comprehensive understanding of Bitcoin’s influence and halving cycle, strategic diversification, diligent risk management, and staying informed about market trends. By combining these elements and committing to continuous learning, you can navigate the volatile crypto market with greater confidence and optimize your investment outcomes.</p>
        `
    }
};

chapterButtons.forEach(button => {
    button.addEventListener('click', function () {
        const chapter = this.getAttribute('data-chapter');
        updateContent(chapter);
        updateProgress(chapter);
    });
});

document.getElementById('home-link').addEventListener('click', function () {
    resetContent();
});

function updateContent(chapter) {
    chapterTitle.textContent = chapters[chapter].title;
    chapterContent.innerHTML = chapters[chapter].content;
}

function updateProgress(chapter) {
    const percentage = (chapter / chapterButtons.length) * 100;
    progress.style.width = `${percentage}%`;
    markers.forEach((marker, index) => {
        if (index < chapter) {
            marker.classList.add('completed');
        } else {
            marker.classList.remove('completed');
        }
    });
}

function resetContent() {
    chapterTitle.textContent = 'Welcome';
    chapterContent.innerHTML = 'Welcome to "The Bitcoin Paradox", a comprehensive guide to understanding the intricacies of Bitcoin. Click on any chapter to start reading.';
    progress.style.width = '0%';
    markers.forEach(marker => {
        marker.classList.remove('completed');
    });
}

// Initialize the first chapter view on page load
document.addEventListener('DOMContentLoaded', function () {
    updateContent(1); // Load the first chapter
    updateProgress(1); // Update the progress to the first chapter
});


// Bitcoin Quiz Game Script
document.addEventListener('DOMContentLoaded', (event) => {
    const questions = [
        {
            question: "Staying informed and continuously _______ are essential components of a successful crypto investment strategy. Keeping up with market trends involves following reputable news sources and engaging with online crypto communities on platforms like X.",
            answer: "learning"
        },
        {
            question: "Bitcoin is a __________ currency that enables instant payments to anyone, anywhere in the world.",
            answer: "decentralized"
        },
        {
            question: "The creator of Bitcoin is known as __________ Nakamoto.",
            answer: "Satoshi"
        },
        {
            question: "Reading _________, enrolling in online courses and webinars, and participating in crypto conferences can keep you informed about the latest developments and technologies in the field.",
            answer: "whitepapers"
        },
        {
            question: "Bitcoin transactions are verified by network nodes through __________.",
            answer: "cryptography"
        },
        {
            question: "Miners are rewarded with new bitcoins every ________ years for their efforts, providing an incentive to maintain and secure the network. This process also introduces new bitcoins into circulation at a controlled and predictable rate.",
            answer: "4"
        },
        {
            question: "Effective risk management involves setting strategies to protect your investments. One such strategy is using stop-loss orders to automatically ____ assets when their price drops to a certain level, thereby limiting potential losses.",
            answer: "sell"
        },
        {
            question: "Bitcoin has a capped supply of ______ million coins. This scarcity is designed to mimic precious metals like gold, providing a hedge against inflation and preserving value over time.",
            answer: "21"
        },
        {
            question: "In ____, Bitcoin’s price plummeted, dropping below $4,000 by the end of the year. This decline was attributed to regulatory crackdowns, market corrections, and the bursting of the ICO bubble.",
            answer: "2018"
        },
        {
            question: "Bitcoin’s historical price movements often follow cyclical patterns, including periods of rapid growth (bull markets) followed by corrections (____ markets). Understanding these cycles helps investors anticipate market changes and adjust their strategies accordingly.",
            answer: "bear"
        },
        {
            question: "The Bitcoin _______ cycle is a fundamental aspect of Bitcoin's economic model, designed to control its supply and create a deflationary asset. The _______ event occurs approximately every four years, or every 210,000 blocks mined. During a halving, the reward for mining new Bitcoin blocks is reduced by 50%.",
            answer: "halving"
        },
        {
            question: "Initially, miners received __ BTC per block. This reward has halved several times: to 25 BTC in 2012, 12.5 BTC in 2016, and 6.25 BTC in 2020. The next halving is expected in 2024, reducing the reward to 3.125 BTC.",
            answer: "50"
        },
        {
            question: "The _______ halving cycle is a fundamental mechanism that drives _______'s scarcity and influences its market value. By understanding the historical impact of halving events, investors can strategically plan their investments.",
            answer: "Bitcoin"
        },
        {
            question: "Historically, Bitcoin tends to peak around __-__ months after the halving. Use this information to plan your investment horizon and prepare for potential market corrections.",
            answer: "12-18"
        },
        {
            question: "Timing altcoin investments around Bitcoin’s halving cycles can be a highly effective strategy for _________ returns. By understanding the halving cycle and monitoring Bitcoin’s price trends, investors can strategically position themselves to capitalize on market movements.",
            answer: "maximizing"
        },
        {
            question: "By accumulating Bitcoin ______ the halving and planning your investments accordingly, you can position yourself to benefit from these predictable cycles.",
            answer: "before"
        },
        {
            question: "________ and risk management are critical to navigating the volatile nature of the cryptocurrency market. Diversifying your portfolio means spreading your investments across multiple cryptocurrencies and sectors to reduce risk. Consider Ethereum and other promising altcoins, as well as exploring projects in DeFi, NFTs, and blockchain infrastructure.",
            answer: "Diversification"
        }
    ];

    let currentQuestionIndex = 0;

    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const resultElement = document.getElementById('result');
    const submitButton = document.getElementById('submit-answer');

    function loadQuestion() {
        questionElement.textContent = questions[currentQuestionIndex].question;
        answerElement.value = '';
        resultElement.textContent = '';
    }

    submitButton.addEventListener('click', function() {
        const userAnswer = answerElement.value.trim();
        if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
            resultElement.textContent = 'Correct!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Incorrect, try again!';
            resultElement.style.color = 'red';
        }

        // Load a new question after 2 seconds
        setTimeout(() => {
            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
            loadQuestion();
        }, 2000);
    });

    // Load the first question when the page loads
    loadQuestion();
});
