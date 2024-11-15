import React, { Component } from "react";
import NewsItem from "./NewsItem";
import BgOne from "../assets/WebsiteBgOne.jpeg"


export class News extends Component {
  articles = [
    {
      source: { id: "newsweek", name: "Newsweek" },
      author: "Billie Schwab Dunn",
      title:
        "Megan Fox Baby News Gets Pregnancy Test Company Response - Newsweek",
      description:
        "The actor posed for a photo shoot covered in black paint and cradling her baby bump, which she uploaded to Instagram.",
      url: "https://www.newsweek.com/megan-fox-baby-news-pregnancy-test-company-response-1984253",
      urlToImage: "https://d.newsweek.com/en/full/2518490/megan-fox.jpg",
      publishedAt: "2024-11-12T12:26:15Z",
      content:
        "A pregnancy test company reacted to Megan Fox's announcement that she had a baby on the way.\r\nOn Monday the 38-year-old actor, who in 2023 spoke openly about suffering a miscarriage, took to Instagra… [+3395 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: "Greg Torode",
      title:
        "China military displays upgraded Z-20 helicopter at Zhuhai air show - Reuters",
      description:
        "The Z-20 has potential to plug gaps in the Chinese navy's ability to protect itself from submarines.",
      url: "https://www.reuters.com/business/aerospace-defense/china-military-displays-upgraded-z-20-helicopter-zhuhai-air-show-2024-11-12/",
      urlToImage:
        "https://www.reuters.com/resizer/v2/3QVJKVJ44RM3NDAN37TTLTFI6U.jpg?auth=f5763c43159c7c0b9b7924e6972f1c782acbfa3e671bdf6012a8b982ad02fa6f&height=1005&width=1920&quality=80&smart=true",
      publishedAt: "2024-11-12T12:05:45Z",
      content: null,
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Brian Evans, Alex Harring",
      title:
        "S&P 500 futures are little changed after stocks close at record highs: Live updates - CNBC",
      description:
        "The Dow and S&P 500 closed at all-time highs on Monday, with both surpassing key levels as the trading day ended for the first time.",
      url: "https://www.cnbc.com/2024/11/11/stock-market-today-live-updates.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/108060603-1731101942887-Trading_Floor-Photo-OB-MW-20241108-0010.jpg?v=1731102063&w=1920&h=1080",
      publishedAt: "2024-11-12T10:56:00Z",
      content:
        "Stock futures slipped Tuesday as Wall Street continued analyzing which sectors to pour money into amid a postelection rally that's sent equities to record levels.\r\nFutures tied to the Dow Jones Indus… [+1484 chars]",
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Nika Shakhnazarova",
      title:
        "‘SNL’ star Chloe Fineman says ‘rude’ Elon Musk made her cry: I ‘burst into tears’ - New York Post ",
      description:
        "The comedian, 36, took aim at the Tesla founder, 53, following his scathing comments about the iconic show being a “dying” art.",
      url: "https://nypost.com/2024/11/12/entertainment/snl-star-chloe-fineman-says-rude-elon-musk-made-her-cry-i-burst-into-tears/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2024/11/93498020.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2024-11-12T10:20:00Z",
      content:
        "Chloe Fineman has put Elon Musk on blast — saying he made her “burst into tears” when he hosted “Saturday Night Live” in May 2021.\r\nThe comedian, 36, took aim at the Tesla founder, 53, following his … [+2779 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: null,
      title:
        "Haiti: Airlines suspend flights as Spirit plane hit by gunfire - BBC.com",
      description:
        "It is the second time in weeks an aircraft has come under fire over Port-au-Prince, as gang violence worsens.",
      url: "https://www.bbc.com/news/articles/cy9jpnl3j5wo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/ead6/live/f9ec76b0-a056-11ef-a4fe-a3e9a6c5d640.jpg",
      publishedAt: "2024-11-12T10:13:02Z",
      content:
        "Several airlines have suspended flights to Haiti after a passenger plane from the US was hit by gunfire as it tried to land in Port-au-Prince.\r\nSpirit Airlines Flight 951 from Fort Lauderdale in Flor… [+2045 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Jack Guy",
      title:
        "Archaeologists identify centuries-old battle site in Iraq using declassified spy satellite images - CNN",
      description:
        "Archaeologists say they have found the site of an ancient battle in what is now Iraq by comparing historical accounts with declassified images from US spy satellites.",
      url: "https://www.cnn.com/2024/11/11/science/al-qadisiyyah-site-satellite-images-scli-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/2-battlefield-spy-imagery-credit-us-geological-survey.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-11-12T10:11:00Z",
      content:
        "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nArchaeologists have identified the site of an ancient … [+3048 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Ayelet Sheffey",
      title:
        "3 CEOs preparing to raise prices if Trump enacts trade restrictions - Business Insider",
      description:
        "Three executives have publicly said they'd raise prices for consumers if Trump enacts his proposed tariffs.",
      url: "https://www.businessinsider.com/companies-raising-prices-trump-tariffs-inflation-goods-getting-more-expensive-2024-11",
      urlToImage:
        "https://i.insider.com/67324e81192f525898579966?width=1200&format=jpeg",
      publishedAt: "2024-11-12T10:01:00Z",
      content:
        "Some executives have warned that price hikes are on the way if President-elect Donald Trump's tariff plans go into effect.\r\nOn the campaign trail, Trump proposed a 60% tariff on goods imported from C… [+3428 chars]",
    },
    {
      source: { id: "politico", name: "Politico" },
      author: "Meridith McGraw, Natalie Allison",
      title: "Scenes from Donald Trump’s Mar-a-Lago transition - POLITICO",
      description:
        "A look at the power players populating Trump’s club since the election.",
      url: "https://www.politico.com/news/2024/11/12/trump-transition-musk-wiles-rfkjr-00188863",
      urlToImage:
        "https://static.politico.com/82/9a/cd31f6df4811bb2bce93a0016ceb/https-delivery-gettyimages.com/downloads/2161438889",
      publishedAt: "2024-11-12T10:00:00Z",
      content:
        "During Trumps first transition, the press got a live look at VIPs being paraded through the Trump Tower lobby for meetings upstairs or, in Mitt Romneys case, an embarrassing frog leg dinner with Trum… [+7067 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: "Laila Bassam, Ari Rabinovitch",
      title: "Israeli airstrikes hit Beirut suburbs - Reuters",
      description:
        "The Israeli military mounted one of its heaviest daytime attacks yet on the Hezbollah-controlled area.",
      url: "https://www.reuters.com/world/middle-east/israeli-airstrikes-hit-beirut-suburbs-2024-11-12/",
      urlToImage:
        "https://www.reuters.com/resizer/v2/KRVJKYWO2ZM23FDUVD4ZQRJN4Q.jpg?auth=cba5f7c784a2b9c28ac4e267e88703be244318f0c93cc6581e64a8b964eb418a&height=1005&width=1920&quality=80&smart=true",
      publishedAt: "2024-11-12T09:42:40Z",
      content: null,
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Ivan Mehta",
      title:
        "Signal gets new video call features, making it a viable alternative to Zoom, Meet and Teams - TechCrunch",
      description:
        "Privacy-focused messaging app Signal is adding new features for video calls, including links, reactions and a calls tab, in a bid to pose as an",
      url: "https://techcrunch.com/2024/11/12/signal-gets-new-video-call-features-making-it-a-viable-alternative-to-zoom-meet-and-teams/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/11/call-links-header.jpeg?resize=1200,788",
      publishedAt: "2024-11-12T09:20:16Z",
      content:
        "Privacy-focused messaging app Signal is adding new features for video calls, including links, reactions and a calls tab, in a bid to pose as an alternative to Zoom, Google Meet and Microsoft Teams.\r\n… [+1444 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "The Wall Street Journal",
      title:
        "After War in Gaza, Rivals Hamas and Fatah Don’t Plan to Be in Charge - The Wall Street Journal",
      description: null,
      url: "https://www.wsj.com/world/middle-east/palestinian-factions-edge-toward-plan-for-postwar-gaza-recovery-89ce91ac",
      urlToImage: null,
      publishedAt: "2024-11-12T06:10:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Suntimes.com" },
      author: "Georgia Nicols",
      title: "Horoscope for Tuesday, November 12, 2024 - Chicago Sun-Times",
      description: null,
      url: "https://chicago.suntimes.com/horoscopes/2024/11/12/horoscopes-today-tuesday-november-12-2024",
      urlToImage:
        "https://cst.brightspotcdn.com/dims4/default/2145dbd/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fchorus-production-cst-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fac%2Ffd%2F790f04b15195427014757adc0272%2Fgeorgia-nicols.jpg",
      publishedAt: "2024-11-12T06:05:01Z",
      content:
        "Moon Alert\r\nAfter 12:45 a.m. Chicago time, there are no restrictions to shopping or important decisions. The moon is in Aries.\r\nAries (March 21-April 19)\r\nThis is an excellent day to study, especiall… [+3935 chars]",
    },
    {
      source: { id: null, name: "[Removed]" },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "2024-11-12T06:00:46Z",
      content: "[Removed]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Kaitlan Collins",
      title:
        "Trump picks Kristi Noem to serve as his Homeland Security secretary - CNN",
      description:
        "President-elect Donald Trump has selected South Dakota Gov. Kristi Noem as his next secretary of the Department of Homeland Security, according to two people familiar with the selection.",
      url: "https://www.cnn.com/2024/11/12/politics/kristi-noem-homeland-security-secretary/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/ap24288828291203.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-11-12T06:00:00Z",
      content:
        "President-elect Donald Trump has selected South Dakota Gov. Kristi Noem as his next secretary of the Department of Homeland Security, according to two people familiar with the selection.\r\nNoem will b… [+1523 chars]",
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "JENNIFER PELTZ, MICHAEL R. SISAK",
      title:
        "Judge set to rule on whether to scrap Trump’s conviction in hush money case - The Associated Press",
      description:
        "A judge is due to decide whether to undo President-elect Donald Trump’s conviction in his hush money case because of a U.S. Supreme Court ruling on presidential immunity. New York Judge Juan M. Merchan is scheduled to release his ruling Tuesday. He presided o…",
      url: "https://apnews.com/article/trump-hush-money-immunity-ruling-1b555b96443f38d35e995b8b4853a32c",
      urlToImage:
        "https://dims.apnews.com/dims4/default/dcf9829/2147483647/strip/true/crop/3600x2025+0+201/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F34%2F24%2Fa96e6fa54ddc38313a91b8eb730a%2Fd7a71f3a14da4c19bd8c6ae0a10814b2",
      publishedAt: "2024-11-12T05:22:00Z",
      content:
        "NEW YORK (AP) A judge is due to decide Tuesday whether to undo President-elect Donald Trumps conviction in his hush money case because of a U.S. Supreme Court ruling on presidential immunity.\r\nNew Yo… [+3027 chars]",
    },
    {
      source: { id: null, name: "cleveland.com" },
      author: "Chris Fedor, cleveland.com",
      title:
        "Cavs’ bench sparks second-half rally to help preserve perfect record with 119-113 win over Bulls - cleveland.com",
      description:
        "Cleveland won its 12th straight game to open the 2024-25 season on Monday night, rallying in the second half to hold off the hard-charging Bulls, 119-113.",
      url: "https://www.cleveland.com/cavs/2024/11/cavs-bench-sparks-second-half-rally-to-help-preserve-perfect-record-with-119-113-win-over-bulls.html",
      urlToImage:
        "https://www.cleveland.com/resizer/v2/5DAQRNADPJBVRGE36SBXDN3AIA.jpg?auth=4cfa67460de3286588f13d2dab7f3f82297fa30c2acba4230c5b46346e9c1101&width=1280&quality=90",
      publishedAt: "2024-11-12T04:54:00Z",
      content: null,
    },
    {
      source: { id: "nbc-news", name: "NBC News" },
      author: "Alex Tabet",
      title:
        "Ruben Gallego wins Arizona Senate race over Kari Lake, becomes state's first Latino senator - NBC News",
      description:
        "Democratic Rep. Ruben Gallego will be Arizona’s first Latino senator next year, NBC News projects, after defeating Republican Kari Lake in a hard-fought Senate race.",
      url: "https://www.nbcnews.com/politics/2024-election/ruben-gallego-win-arizona-senate-election-kari-lake-rcna173871",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-10/241029-ruben-gallego-al-1106-86e010.jpg",
      publishedAt: "2024-11-12T04:49:00Z",
      content:
        "PHOENIX Democratic Rep. Ruben Gallego will be Arizonas first Latino senator next year, NBC News projects, after he defeated Republican Kari Lake amid a protracted vote count in one of the key swing s… [+3799 chars]",
    },
    {
      source: { id: null, name: "Air Alamo" },
      author: "Jahlil Williams",
      title:
        "Spurs tie franchise record behind unbelievable Wembanyama performance - Air Alamo",
      description:
        "The San Antonio Spurs beat the Sacramento Kings and made history in the process behind Victor Wembanyama's crazy night.",
      url: "https://airalamo.com/san-antonio-spurs-tie-franchise-history-behind-unbelievable-victor-wembanyama-performance",
      urlToImage:
        "https://images2.minutemediacdn.com/image/upload/c_crop,w_4900,h_2756,x_0,y_81/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/29/01jcf8wxzx0gpn94dwxy.jpg",
      publishedAt: "2024-11-12T04:19:53Z",
      content:
        "When the Sacramento Kings traded Harrison Barnes to San Antonio in a three-team deal to make space for DeMar DeRozan, there was a lot of confusion in basketball circles. Everyone knew the Chicago Bul… [+3245 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: "NFL",
      title:
        "Miami Dolphins vs. Los Angeles Rams Game Highlights | NFL 2024 Season Week 10 - NFL",
      description: null,
      url: "https://www.youtube.com/watch?v\\\\u003dujGt3_kpSaU",
      urlToImage: null,
      publishedAt: "2024-11-12T04:18:26Z",
      content: null,
    },
    {
      source: { id: null, name: "WLWT Cincinnati" },
      author: "Emily Sanderson",
      title:
        "Jury finds Richard Allen guilty on all counts in Delphi murders trial - WLWT Cincinnati",
      description:
        "Richard Allen, the man accused of killing two teenagers in Delphi, Indiana in 2017, has been found guilty on all four counts.",
      url: "https://www.wlwt.com/article/jury-reaches-verdict-richard-allen-trial-delphi-murders/62872896",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/richard-allen-1667227489.jpg?crop=1.00xw:0.766xh;0,0&resize=1200:*",
      publishedAt: "2024-11-12T04:12:00Z",
      content:
        "DELPHI, Ind. —Richard Allen, the man accused of killing two teenagers in Delphi, Indiana in 2017, has been found guilty on all four counts.\r\nAccording to NBC affiliate WTHR, the jury found suspect Ri… [+2350 chars]",
    },
  ];
  constructor() {
    super();
    console.log("I am a constructor");
    this.state={
        articles : this.articles,
    }
  }
  render() {
    return (
      <div style={{ backgroundImage: `url(${BgOne})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="pt-6">
      <h2 className="text-3xl p-5 text-center bg-blue-300  mb-6">News Monkey - Top Headlines</h2>
      <div className="columns-1 md:columns-3 gap-4 space-y-4">
        {this.state.articles.map((element) => (
        <div className="break-inside-avoid" key={element.url}>
          <NewsItem title={element.title} desc={element.description} img={element.urlToImage} newsUrl={element.url} />
        </div>
        ))}
      </div>
      </div>
    );
  }
}

export default News;
