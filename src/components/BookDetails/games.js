const games = [
    {
      title: "The Last of Us Part II",
      accessibility: ["Visual Impairments", "Hearing Impairments", "Motor Disabilities"],
      publisher: "Sony Interactive Entertainment",
      releaseDate: "June 19, 2020",
      description: "An action-adventure game set in a post-apocalyptic world where players control a young woman named Ellie as she seeks revenge against those who have wronged her. The game features various accessibility options such as high contrast modes, customizable subtitles, and audio cues for important information.",
      accessibilitySummary: {
        "Visual Impairments": "High contrast modes, customizable subtitles, and audio cues.",
        "Hearing Impairments": "Customizable subtitles and visual cues.",
        "Motor Disabilities": "Customizable controls and reduced reliance on precise timing."
      },
      imageLink: "https://example.com/last_of_us_part_ii_cover.jpg",
      embeddedVideoLink: "https://www.youtube.com/embed/VIDEO_ID"
    },
    {
      title: "Celeste",
      accessibility: ["Motor Disabilities", "Visual Impairments", "Hearing Impairments"],
      publisher: "Matt Makes Games",
      releaseDate: "January 25, 2018",
      description: "A platformer game where players control a young woman named Madeline as she climbs the titular Celeste Mountain. Celeste features accessibility options such as customizable controls, assist mode for easier gameplay, and text resizing options.",
      accessibilitySummary: {
        "Motor Disabilities": "Customizable controls and assist mode.",
        "Visual Impairments": "Text resizing options.",
        "Hearing Impairments": "Visual cues."
      },
      imageLink: "https://example.com/celeste_cover.jpg",
      embeddedVideoLink: "https://www.youtube.com/embed/VIDEO_ID"
    },
    // Add more games with embeddedVideoLink as needed
  ];
  
  export default games;
  