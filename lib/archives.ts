export type ArchiveItem = { time: string; text: string };
export type ArchiveDay = { heading: string; items: ArchiveItem[] };
export type Archive = {
  year: string;
  title: string;
  meta: string;
  days: ArchiveDay[];
  speakers: string[];
};

// Text supports **bold** and _italic_ (rendered by components/RichText).
export const archives: Archive[] = [
  {
    "year": "2025",
    "title": "Anchored in History, Focused on the Future: Education and Mass Incarceration",
    "meta": "October 11–12, 2025 · Boston University, Questrom School of Business · In-Person & Virtual",
    "days": [
      {
        "heading": "Day 1 — Saturday, October 11 (Education-Focused)",
        "items": [
          {
            "time": "9:00 AM",
            "text": "Welcome and Opening Remarks by **James Eddy** & Dance Performance by OrigiNation Cultural Arts Center"
          },
          {
            "time": "9:45 AM",
            "text": "Lecturer: **Steve Hahn** — The roots of the civil rights movement and unseen local organizing"
          },
          {
            "time": "10:30 AM",
            "text": "Lecturer: **Donald Yacovone** — Teaching White Supremacy: America's Textbook History"
          },
          {
            "time": "",
            "text": "Lecturer: **Noliwe Rooks** — _INTEGRATED: How American Schools Failed Black Children_"
          },
          {
            "time": "11:45 AM",
            "text": "Concurrent Breakout Discussion Groups (4 sessions)"
          },
          {
            "time": "1:30 PM",
            "text": "Lecturers: **Dr. William Darity Jr.** & **Kirsten Mullen**"
          },
          {
            "time": "2:45 PM",
            "text": "Concurrent Breakout Discussion Groups (4 sessions)"
          },
          {
            "time": "4:00 PM",
            "text": "Music & Networking Dinner"
          },
          {
            "time": "5:00 PM",
            "text": "Keynote: **Bryan Stevenson**, Founder, Equal Justice Initiative"
          }
        ]
      },
      {
        "heading": "Day 2 — Sunday, October 12 (Mass Incarceration-Focused)",
        "items": [
          {
            "time": "9:00 AM",
            "text": "Welcome Remarks"
          },
          {
            "time": "9:15 AM",
            "text": "Lecturer: **Ruha Benjamin** (2024 MacArthur Fellow) — Race, technology, and the future of abolition"
          },
          {
            "time": "10:15 AM",
            "text": "Lecturer: **Rachel Barkow** — _Justice Abandoned_"
          },
          {
            "time": "11:30 AM",
            "text": "Concurrent Breakout Discussion Groups (4 sessions)"
          },
          {
            "time": "1:15 PM",
            "text": "Moving Forward / Next Steps Panel"
          },
          {
            "time": "2:30 PM",
            "text": "Closing Remarks"
          }
        ]
      }
    ],
    "speakers": [
      "Bryan Stevenson (Keynote)",
      "Noliwe Rooks",
      "Steve Hahn",
      "Donald Yacovone",
      "Ruha Benjamin",
      "Rachel Barkow",
      "William Darity Jr.",
      "Kirsten Mullen"
    ]
  },
  {
    "year": "2024",
    "title": "The Vote, Caste, and the Carceral State",
    "meta": "April 27–28, 2024 · Virtual Experience · 500+ Attendees",
    "days": [
      {
        "heading": "Day 1 — Saturday, April 27",
        "items": [
          {
            "time": "11:00 AM",
            "text": "Welcome: Drum solo by **Ron Savage** · **Danny Glover** reading Rev. Turner McNeal's Address to Congress, 1865 · Welcome by **Dr. Janet Moses**"
          },
          {
            "time": "11:30 AM",
            "text": "Lecture #1: **Kirsten Mullen** — \"The Principles of Reconstruction: Still a Viable Route to Full Citizenship\" · Moderator: **Nicholas Lemann**"
          },
          {
            "time": "1:00 PM",
            "text": "Lecture #2: **Julian Zelizer** (Princeton) — \"LBJ, Atlantic City and the Taming of the Civil Rights Movement… And Here We Are!\" · Moderator: **Joannie Wynne**"
          },
          {
            "time": "2:30 PM",
            "text": "Show & Tell Sessions: **DESPA Experience** (Cliff Freeman, Greg Budzban) · **Reconstruction Data** (Prof. Nathan Alexander, Howard/Morehouse) · **Street Theory Art** (Victor Quiñonez / Marka27, Moses Mitchell) · **21st Century Freedom School** with incarcerated artists (Claudia Peña, Bryonn Bain / UCLA)"
          },
          {
            "time": "3:30 PM",
            "text": "Lecture #3: **Elizabeth Hinton** (Yale) — \"Mass Incarceration: The Social Control of 'Disposable' Communities\" · Moderator: **Maria Lovett** (FIU)"
          },
          {
            "time": "4:45 PM",
            "text": "Lecture #4: **Laura Kurgan** (Columbia) — \"The Carceral Merry Go Round: Million Dollar Blocks\" · Moderator: **Ben Moynihan**"
          }
        ]
      },
      {
        "heading": "Day 2 — Sunday, April 28",
        "items": [
          {
            "time": "11:00 AM",
            "text": "Welcome: Invocation by **2Truth**, Spoken Word Artist · Welcome by **Ben Moynihan**"
          },
          {
            "time": "11:15 AM",
            "text": "Lecture #5: **Bettina Love** (Columbia) — \"Africans Built the Pyramids. How Come Black Kids in America Can't Do Math?\" · Moderator: **Brian Williams** (FIU)"
          },
          {
            "time": "2:00 PM",
            "text": "Lecture #6: **Margaret Burnham** (Northeastern) — \"The Jim Crow Roots of Police Violence in Black and Latino Communities\" · Moderator: **Ernesto Cortes** (MacArthur Fellow, IAF)"
          },
          {
            "time": "2:30 PM",
            "text": "Panels: **Voting Our Way Out** (Liz Miranda, Rahsaan Hall, Jacqueline Fonseca, Christopher Worrell) · **Organizing Education Inside and Outside the Wall** (Lee Perlman/MIT, Mac Hudson/Emerson, Stan Andrisse/Howard)"
          },
          {
            "time": "3:00 PM",
            "text": "Lecture #7: **William Darity Jr.** — \"The IOU for the Devastation of Black Life: From Slavery and Jim Crow to Mass Incarceration\" · Moderator: **Tasseli McKay**"
          },
          {
            "time": "3:45 PM",
            "text": "**DESPA Presentation**: Greg Budzban, Cliff Freeman, Amina Osman, Sharif Abdullahi"
          },
          {
            "time": "3:55 PM",
            "text": "Closing Panel: \"Where Do We Go From Here?\" — **William Darity**, **Margaret Burnham**, **Liz Miranda**, **Elizabeth Hinton**, **Sean Evelyn (Truth)** · Moderator: **Ernesto Cortes**"
          },
          {
            "time": "4:55 PM",
            "text": "Closing Remarks: **Dr. Janet Moses**"
          }
        ]
      }
    ],
    "speakers": [
      "Danny Glover",
      "Kirsten Mullen",
      "Julian Zelizer",
      "Elizabeth Hinton",
      "Laura Kurgan",
      "Bettina Love",
      "Margaret Burnham",
      "William Darity Jr.",
      "Ernesto Cortes",
      "Rahsaan Hall",
      "Liz Miranda",
      "Tasseli McKay",
      "Nicholas Lemann",
      "Bryonn Bain",
      "Victor Quiñonez (Marka27)"
    ]
  },
  {
    "year": "2023",
    "title": "The Vote, Caste, and the Carceral State",
    "meta": "January 28–29, 2023 · MIT Media Lab, Cambridge, MA · Virtual and In-Person",
    "days": [
      {
        "heading": "Day 1 — Saturday, January 28",
        "items": [
          {
            "time": "9:00 AM",
            "text": "Welcome by **Melissa Nobles**, Chancellor, MIT & Co-founder, Civil Rights and Restorative Justice Program"
          },
          {
            "time": "9:15 AM",
            "text": "Lecturer: **Khalil Gibran Muhammad** — \"The Condemnation of Blackness, the Criminalization of Blackness: Precursors to the Carceral State\""
          },
          {
            "time": "10:30 AM",
            "text": "Lecturer: **Nicholas Lemann** — \"Reconstruction and The Battle for Citizenship and/or Voting, Violence and Reconstruction\""
          },
          {
            "time": "11:45 AM",
            "text": "Breakout Groups: **Margaret Burnham** (By Hands Now Known), **Desmond Meade** (Disenfranchisement), **Vincent Warren** (13th Amendment Loophole), **Chesa Boudin** (Criminal Justice Reform)"
          },
          {
            "time": "1:45 PM",
            "text": "Lecturers: **Dr. William Darity Jr.** & **Kirsten Mullen** — \"The Social Ecology of a Disposable People\""
          },
          {
            "time": "3:00 PM",
            "text": "Breakout Groups: **Douglas Blackmon** (Slavery by Another Name), **Tasseli McKay** (Stolen Wealth Hidden Power), **Rasul Mowatt** (Geographies of Threat), **Rahsaan Hall** (Juvenile Injustice)"
          },
          {
            "time": "4:00 PM",
            "text": "Music of Liberation by **The Ron Savage Trio** & **Larry Watson** · Kalief Browder Documentary Preview"
          }
        ]
      },
      {
        "heading": "Day 2 — Sunday, January 29",
        "items": [
          {
            "time": "11:00 AM",
            "text": "Lecturer: **Goodwin Liu** — \"Education, Equality, and the Constitution\""
          },
          {
            "time": "12:15 PM",
            "text": "Breakout Groups: **Nicholas Lemann** (Ending Affirmative Action), **Mark Rosenbaum** (Detroit School to Prison Pipeline), **James Anderson** (Education, Voting, and Political Power)"
          },
          {
            "time": "2:00 PM",
            "text": "Moving Forward/Next Steps: **Kelly Lytle Hernandez**, **Khalil Gibran Muhammad**, **Tasseli McKay**, **William Darity Jr.**"
          },
          {
            "time": "3:00 PM",
            "text": "Closing: **Janet Moses**, **Margaret Burnham**, **Danny Glover**"
          }
        ]
      }
    ],
    "speakers": [
      "Khalil Gibran Muhammad",
      "Nicholas Lemann",
      "Margaret Burnham",
      "Desmond Meade",
      "Chesa Boudin",
      "William Darity Jr.",
      "Kirsten Mullen",
      "Douglas Blackmon",
      "Tasseli McKay",
      "Rahsaan Hall",
      "Goodwin Liu",
      "Kelly Lytle Hernandez",
      "Danny Glover"
    ]
  },
  {
    "year": "2022",
    "title": "Education, Insurgents and Insurgencies",
    "meta": "April 9–10, 2022 · MIT, Cambridge, MA · Virtual and In-Person · Inaugural Bob Moses Conference",
    "days": [
      {
        "heading": "Day 1 — Saturday, April 9",
        "items": [
          {
            "time": "11:30 AM",
            "text": "Welcome: **Paul Parravano** (MIT) · Remarks: **Danny Glover** · Intro: **Janet Moses**"
          },
          {
            "time": "11:30 AM",
            "text": "Lecture I: **Nicholas Lemann** — \"The Future of Bob Moses's Work\" · Moderator: **Maisha Moses**"
          },
          {
            "time": "",
            "text": "Breakout Groups: **Peggy Cooper Davis** (Federal Right to Education), **Mark Rosenbaum** (Literacy & Antiracist Education), **Jon Rochkind** (Recruiting Black Educators)"
          },
          {
            "time": "2:30 PM",
            "text": "Lecture II: **Dean James Anderson** — \"Schooling for Democratic Citizenship\" · Co-Moderators: **Charles Payne**, **Joan Wynne**"
          },
          {
            "time": "",
            "text": "Breakout Groups: **Dr. Nettrice Gaskins** (Artivism), **Lynne Godfrey** & **Ben Moynihan** (Algebra Project at King Open), **Alan & Michelle Shaw** (Homeschooling)"
          },
          {
            "time": "5:30 PM",
            "text": "Film Screening: _Caste in the Classroom_ & Fireside Chat with **Janet Moses**, **Phillip Agnew**, **Manuel Fernandez**"
          }
        ]
      },
      {
        "heading": "Day 2 — Sunday, April 10",
        "items": [
          {
            "time": "11:30 AM",
            "text": "Lecture III: **Jarvis R. Givens** (Harvard) — \"The Fugitive Life of Black Teaching\" · Moderators: **Phillip Agnew**, **Cliff Freeman**"
          },
          {
            "time": "",
            "text": "Breakout Groups: **Dr. Gregory Budzban** (Accelerate, Don't Remediate), **Abdi M. Ali** (Pipeline of Black Teachers), **Kathleen FitzGerald** (How to Teach What Really Happened)"
          },
          {
            "time": "2:30 PM",
            "text": "Lecture IV: **Imani Perry** (Princeton) — \"Bob Moses and the Ideal of Constitutional Citizenship\" · Moderator: **Cynthia Silva Parker**"
          },
          {
            "time": "",
            "text": "Breakout Groups: **Dr. Nettrice Gaskins** (AI & Black Consciousness), **Charles Payne** (Freedom Schools), **Maisha Moses** & **Cliff Freeman** (Credentialing Young People to Teach Math)"
          },
          {
            "time": "3:00 PM",
            "text": "Closing Remarks: **Dr. Cornel West** · Introduction by **Janet Moses**"
          }
        ]
      }
    ],
    "speakers": [
      "Dr. Cornel West (Closing)",
      "Danny Glover",
      "Imani Perry",
      "Nicholas Lemann",
      "James Anderson",
      "Jarvis R. Givens",
      "Peggy Cooper Davis",
      "Mark Rosenbaum",
      "Phillip Agnew",
      "Dr. Nettrice Gaskins",
      "Kathleen FitzGerald"
    ]
  }
];
