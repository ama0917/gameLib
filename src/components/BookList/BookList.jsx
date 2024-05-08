import React, { useState } from 'react';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import FilterPanel from "./FilterPanel";
import "./BookList.css";

const staticBooks = [
  {
    id: 1,
    title: "The Last of Us Part II",
    author:  ["Visual Impairments", "Hearing Impairments", "Motor Disabilities"],
    edition_count: ["Sony Interactive Entertainment"],
    first_publish_year: "June 19, 2020",
    imageLink: "https://archive.org/services/img/the-art-of-the-last-of-us-partii/full/pct:200/0/default.jpg",
    embeddedVideoLink: "https://www.youtube.com/embed/cxJWO3Dejj0?si=RpWevFYJ7b5Gx_vC"
  },
  {
    id: 2,
    title: "Celeste",
    author:  ["Visual Impairments", "Hearing Impairments", "Motor Disabilities"],
    edition_count: ["Matt Makes Games"],
    first_publish_year: "January 25, 2018",
    imageLink: "https://ewingsvoice.com/wp-content/uploads/2019/11/480274-celeste-nintendo-switch-front-cover.jpg"
  },
  {
    id: 3,
    title: "Forza Horizon 4",
    author:  ["Visual Impairments", "Hearing Impairments", "Motor Disabilities"],
    edition_count: ["Microsoft Studios"],
    first_publish_year: "October 2, 2018",
    imageLink: "https://1.bp.blogspot.com/-hmBTLQV1pwo/XkYZqoETMsI/AAAAAAAADW8/y40vam5Xh3UWcuKTc90qkDwJKREsT4zmQCLcBGAsYHQ/s1600/forza.jpg"
  },
  {
    "id": 4,
    "title": "A Blind Legend",
    "author": ["Blindness"],
    "edition_count": ["Dowino"],
    "first_publish_year": "April 7, 2016",
    "imageLink": "https://assistivetechnologyblog.com/wp-content/uploads/2014/08/99bc06f706b69820ddfca3f40f4502f1.png"
  },
  {
    id: 4,
    title: "The Legend of Zelda: Breath of the Wild",
    author:  ["Visual Impairments", "Hearing Impairments", "Motor Disabilities"],
    edition_count: ["Nintendo"],
    first_publish_year: "March 3, 2017",
    imageLink: "https://cdn02.nintendo-europe.com/media/images/08_content_images/games_6/nintendo_switch_7/nswitch_thelegendofzeldabreathofthewild/NSwitch_TheLegendOfZeldaBreathOfTheWild_wp_tablet_01.jpg"
  },
  {
    id: 5,
    title: "Untitled Goose Game",
    author:  ["Visual Impairments", "Motor Disabilities"],
    edition_count: ["House House"],
    first_publish_year: "September 20, 2019",
    imageLink: "https://cdn.mobygames.com/covers/8040315-untitled-goose-game-windows-front-cover.jpg"
  },
  { 
    id: 3,
    title: "Assassin's Creed Valhalla",
    author: ["Visual Impairments", "Hearing Impairments", "Motor Disabilities"],
    edition_count: "Ubisoft",
    first_publish_year: "November 10, 2020",
    imageLink: "https://wallpapercave.com/wp/wp6364510.jpg",
  },
  {
    id: 4,
    title: "Minecraft",
    author: ["Motor Disabilities", "Visual Impairments", "Hearing Impairments"],
    edition_count: "Mojang Studios",
    first_publish_year: "November 18, 2011",
    imageLink: "https://cdn.mobygames.com/covers/3713166-minecraft-nintendo-switch-front-cover.jpg",
  },
  {
    id: 8,
    title: "Animal Crossing: New Horizons",
    author: ["Motor Disabilities", "Visual Impairments", "Hearing Impairments"],
    edition_count: "Nintendo",
    first_publish_year: "March 20, 2020",
    imageLink: "https://cdn.mobygames.com/covers/8733531-animal-crossing-new-horizons-nintendo-switch-front-cover.jpg",
  },
  {
    id: 7,
    title: "Among Us",
    author: ["Visual Impairments", "Hearing Impairments"],
    edition_count: "Innersloth",
    first_publish_year: "June 15, 2018",
    imageLink: "https://assets-prd.ignimgs.com/2020/12/15/among-us-button-fin-1608054673652.jpg",
  },
  {
    id: 6,
    title: "Stardew Valley",
    author: ["Motor Disabilities", "Visual Impairments", "Hearing Impairments"],
    edition_count: "ConcernedApe",
    first_publish_year: "February 26, 2016",
    imageLink: "https://store-images.s-microsoft.com/image/apps.44413.65985311967005000.4f51b5e9-febf-4990-8951-33ba59b634c9.924253ef-36b2-4cc0-8bb1-9a97c88d4828",
  },
  {
    "id": 12,
    "title": "Overwatch",
    "author": ["Motor Disabilities", "Visual Impairments", "Hearing Impairments"],
    "edition_count": "Blizzard Entertainment",
    "first_publish_year": "May 24, 2016",
    "imageLink": "https://1.bp.blogspot.com/-Ilc0C9BjHLs/V0QsjCyEK5I/AAAAAAABOUc/IbYf6dEfQxIx-2AyuyMEeiMPESLsaFhoACLcB/s1600/overwatch-game-cover.jpg",
  },
  {
    "id": 13,
    "title": "Rocket League",
    "author": ["Motor Disabilities", "Visual Impairments", "Hearing Impairments"],
    "edition_count": "Psyonix",
    "first_publish_year": "July 7, 2015",
    "imageLink": "https://cdn.mobygames.com/covers/3195496-rocket-league-xbox-one-front-cover.jpg",
  },
];

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    visualImpairments: false,
    hearingImpairments: false,
    motorDisabilities: false,
    blindness: false,
  });
  const [showFilters, setShowFilters] = useState(false);
  const loading = false; // Set loading to false for static example
  const resultTitle = "Results"; // Set a result title for the static example

  const booksWithCovers = staticBooks.map((singleBook) => ({
    ...singleBook,
    cover_img: singleBook.imageLink ? singleBook.imageLink : coverImg
  }));

  const filteredBooks = booksWithCovers.filter(book => {
    const { visualImpairments, hearingImpairments, motorDisabilities, blindness } = filters;
    const accessibilityOptions = book.author;

    const meetsVisualImpairmentFilter = visualImpairments ? accessibilityOptions.includes("Visual Impairments") : true;
    const meetsHearingImpairmentFilter = hearingImpairments ? accessibilityOptions.includes("Hearing Impairments") : true;
    const meetsMotorDisabilityFilter = motorDisabilities ? accessibilityOptions.includes("Motor Disabilities") : true;
    const meetsBlindnessFilter = blindness ? accessibilityOptions.includes("Blindness") : true;

    const meetsAccessibilityFilters = meetsVisualImpairmentFilter && meetsHearingImpairmentFilter && meetsMotorDisabilityFilter;

    return book.title.toLowerCase().includes(searchTerm.toLowerCase()) && meetsAccessibilityFilters;
  });

  if (loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <button onClick={() => setShowFilters(!showFilters)} style={{textAlign: 'right'}}>
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        <div>
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
        <div className='booklist-content grid'>
          {filteredBooks.slice(0, 30).map((item, index) => (
            <Book key={index} {...item} />
          ))}
        </div>
        {showFilters && (
          <FilterPanel filters={filters} setFilters={setFilters} />
        )}
      </div>
    </section>
  );
}

export default BookList;
export {staticBooks};