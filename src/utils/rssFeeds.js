const rssFeeds = {
  news: [
    {
      title: "BBC News",
      link: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fworld%2Frss.xml&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "The New York Times",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.nytimes.com%2Fsvc%2Fcollections%2Fv1%2Fpublish%2Fhttps%3A%2F%2Fwww.nytimes.com%2Fsection%2Fworld%2Frss.xml&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Slashdot",
      link: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.slashdot.org%2FSlashdot%2FslashdotMain&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Reddit",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fprogramming%2F.rss&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Hacker News",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.ycombinator.com%2Frss&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "CNN",
      link: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.cnn.com%2Frss%2Fedition_world.rss&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Times Of India",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeeds%2F296589292.cms&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "ABC News",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fabcnews.go.com%2Fabcnews%2Finternationalheadlines&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "NDTV News",
      link: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2Fndtvnews-world-news&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "The Independent",
      link: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.independent.co.uk%2Fnews%2Fworld%2Frss&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Smashing Magazine",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.smashingmagazine.com%2Ffeed&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Devlounge Feed",
      link: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2FDevlounge&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Ars Technica",
      link: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.arstechnica.com%2Farstechnica%2Findex&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Stevey's Blog Rants",
      link: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fsteve-yegge.blogspot.com%2Ffeeds%2Fposts%2Fdefault&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Top News",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.skynews.com%2Ffeeds%2Frss%2Fworld.xml&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "World News",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D100727362&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Europe News",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D19794221&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Business",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D10001147&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Earnings",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D15839135&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Commentary",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D100370673&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Economy",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D20910258&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Finance",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D10000664&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
  ],

  blogs: [
    {
      title: "Charting Asia",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D23103686&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "NetNet",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D38818154&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Trader Talk",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D20398120&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Buffett Watch",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D19206666&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
  ],
  education: [
    {
      title: "General",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D237&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "e-Learning",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D565&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Further Education",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D566&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Higher Education",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D567&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Music Teaching",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D598&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Nursery",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D601&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Primary Education",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D599&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Secondary Education",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D600&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Students",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D568&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
  ],

  tech: [
    {
      title: "JavaScript Weekly",
      link: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fjavascriptweekly.com%2Frss%2F14j0bm2k&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Technology",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D19854910&api_key=cobrxoktrnwxevsi4uh7dqmafbudf75goitwjb6r",
    },
    {
      title: "Chromium Blog",
      link: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fblog.chromium.org%2Ffeeds%2Fposts%2Fdefault&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Joel on Software",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.joelonsoftware.com%2Ffeed%2F&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "The Gurdian",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Fuk%2Frss&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Mozila Hacks",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fhacks.mozilla.org%2Ffeed&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "CSS Tricks",
      link: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2FCssTricks&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "JavaScript Blog",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fjavascriptweblog.wordpress.com%2Ffeed&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Design Strategy",
      link: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2FFunctioningForm&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
  ],

  tv_programs: [
    {
      title: "Squawk Box Asia",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D15838831&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "The Call",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D37447855&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Top Video",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D15839263&api_key=nmf9effsrsnz9tkoagc6qakkc86xk68zrlq2wdgl",
    },
    {
      title: "Digital Workshop",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D100616801&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Latest Video",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D100004038&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "CEO Interviews",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D100004032&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Analyst Interviews",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D100004033&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Must Watch",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D101014894&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Squawk Box",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D15838368&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Squawk on the Street",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D15838381&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Power Lunch",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D15838342&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Street Signs",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D15838408&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Options Action",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D28282083&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Closing Bell",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D15838421&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Fast Money",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D15838499&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Mad Money",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D15838459&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Kudlow Report",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D15838446&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Futures Now",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D48227449&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Suze Orman",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D15838523&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
  ],

  business: [
    {
      title: "World Business",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.cnbc.com%2Fid%2F19746125%2Fdevice%2Frss%2Frss.xml&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Breaking Business News",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffortune.com%2Ffeed&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Financial Times",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.ft.com%2Frss%2Fhome%2Fuk&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Investing",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.investing.com%2Frss%2Fnews.rss&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Business Today",
      link: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.businesstoday.in%2Frss%2Frssstory.jsp%3Fsid%3D105&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Zee Business",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.zeebiz.com%2Flatest.xml%2Ffeed&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Money Web",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.moneyweb.co.za%2Ffeed%2F&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Small Business",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D44877279&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
  ],

  entertainment: [
    {
      title: "Art",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D628&api_key=ffedbqneucaxd6ftgmhw1wkghdlfpohnuus2sxqw",
    },
    {
      title: "Casinos",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D591&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Celebrities",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D647&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Sport",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D747&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Cinema",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D765&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Comedy",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D722&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Television",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D510&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Music",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D509&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
  ],

  politics: [
    {
      title: "General",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D467&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Conservative",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D571&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Elections",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D774&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Liberalism",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D572&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Sociallism",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D574&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
  ],

  investing: [
    {
      title: "Investing",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D15839069&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Financial Advisors",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D100646281&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Personal Finance",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsearch.cnbc.com%2Frs%2Fsearch%2Fcombinedcms%2Fview.xml%3FpartnerId%3Dwrss01%26id%3D21324812&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
  ],

  science: [
    {
      title: "General",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D418&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Anthropology",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D534&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Archaeology",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D533&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Biology",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D714&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Chemicals",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D419&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Laboratory Science",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D420&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Natural World",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D775&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Separations Science",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D421&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
    {
      title: "Technology",
      link: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.realwire.com%2Frss%2F%3Fid%3D422&api_key=uqa2wcflccwwz2xluqjuevuwztmrgljtptwv53ps",
    },
  ],
};

export default rssFeeds;
