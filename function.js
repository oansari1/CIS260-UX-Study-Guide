const definitions = [ "UX stands for User Experience, which refers to how a person feels when they interact with a product or service. It involves understanding the user's needs, goals, and behaviors, and designing products and services that meet those needs in a way that is intuitive and pleasing to use.",
"UI stands for User Interface, which refers to the visual and interactive elements of a product or service that the user interacts with. The goal of effective UI is to make the user's experience easy and intuitive, requiring minimum effort on the user's part to receive the maximum desired outcome.",
"The process design teams use to create products that provide meaningful and relevant experiences to users. UX design involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability, and function. A good UX design not only enhances the user's experience but also improves the product's overall performance and success.",
"Interaction Design (IxD) is the design of interactive products and services in which a designer’s focus goes beyond the item in development to include the way users will interact with it",
"The concept of incorporating aesthetic appeal and usability in the design of a product, using suitable images, typography, space, layout, and color. Visual design is about more than aesthetics; designers place elements carefully to create interfaces that optimize user experience and drive conversion.",
"Design anthropology is a form of applied anthropology that makes use of ethnographic methods to develop new products, services, practices, and forms of sociality.",
"Graphic design is a profession, academic discipline and applied art whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives.",
"Human-computer interaction (HCI) is a multidisciplinary field of study focusing on the design of computer technology and, in particular, the interaction between humans (the users) and computers. While initially concerned with computers, HCI has since expanded to cover almost all forms of information technology design.",
"User Interaction refers to the interactive elements and services of a product. It is the meaningful relationship between people and the products and services they use.",
"Information architecture is the structural design of shared information environments; the art and science of organizing and labelling websites, intranets, online communities, and software to support usability and findability; and an emerging community of practice focused on bringing principles of design, architecture, and information science to the digital landscape.",
"Accessibility is the design of products, devices, services, vehicles, or environments so as to be usable by people with disabilities. The concept of accessible design and practice of accessible development ensures both 'direct access' and 'indirect access' meaning compatibility with a person's assistive technology.",
"Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
"Copywriting is the process of creating intellectual property that gives its owner the exclusive right to copy, distribute, adapt, display, and perform a creative work, usually for a limited time. This includes IP such as advertisements, marketing materials, or website content. The goal of copywriting as it pertains to user experience is to increase engagement, drive conversions, and build brand loyalty.",
"Marketing involves creating and implementing strategies to promote and communicate the value of a product or service to potential customers. It focuses on understanding the user's needs, behaviors, and preferences and creating compelling content, messaging, and branding that aligns with the user's expectations and preferences. Marketing aims to create a positive perception of the product or service by highlighting its benefits, unique features, and user-centered design.",
"In UX/UI Design a User Problem (Statement) is an unmet need that a user identifies and wants a solution to meet an end result. It can be an actual problem that needs fixing or it can be a request for a new element or feature. This Problem Statement is given to a Designer by the user. The Discovery in UX/UI is the process of researching, framing, and gathering of information/evidence to understand the initial direction to getting to the solution/end result of a User Problem. In simpler terms it means researching and making a plan to meet the end result. The Hypothesis/Statement is basically the same as the Discovery, but with more emphasis in using a If/then statement to understand the User Problem and process to the Solution.",
"The Process of researching information to solve a User Problem, specifically finding out information about the users of a Designers product. User Research is important because it helps a designer understand a users needs, in order to perfect, customize, and increase usability of the end Product.",
"A UX Project Plan is a type of planning form for organizing when a UX element is going to be completed. It can be organized by time period, who will work on what (If you are in team), the element or activity, and or any other  grouping you want.",
"A Needs Assessment is a process for determining the needs of a project between the current state of the project and the end result of the project.",
"A means of receiving feedback for a prototype or finished project by using people from the public to test it. Similar to holding a public Beta Test.",
"A process of determining the end result of a project by asking/testing what future users want and need so that the project may be improved.",
"A process or plan put into place for ensuring that all aspects of the ultimate end result works seamlessly to produce the desired user experience. This may include but is not limited by the time, place and format for the result as well as the ultimate visual design, brand strategy, functionality, etc.",
"A simplified in-depth review of a designers’ project that showcases their skills and skill level at the instance of project creation.",
"A summary of a person’s job description and why it matters. Emphasizing simplicity, and generally in 75 words or less (apron. 15-30 seconds to be read aloud).",
"A term to Remind Designers of the basics or most important concepts of UI. Especially if the Designer over focuses on UX or puts to much emphasis on visual design and forgets that their design usability needs and practicality.",
"The plan a team or group uses to create a meaningful and relevant product.",
"The process of comparing two products to see what similarities and differences they have in order to find ways of improvement.",
"Normally designers or researchers would use this method to talk to other stakeholders in the organization. Typically people that don’t have anything to do with design (engineers, product managers, upper management, etc). A listening tour helps you learn what your team’s priorities are, and how much awareness and support for UX currently exists. Especially for teams of one, knowing the priorities of others will help you identify where there are opportunities and problems to solve, and where user-centered design practices might be a good fit. A listening tour is a  time set up to gather information and learn what matters to your colleagues",
"Usability testing is the practice of testing how easy a design is to use with a group of representative users. It usually involves observing users as they attempt to complete tasks and can be done for different types of designs. It is often conducted repeatedly, from early development until a product's release.",
"A web development framework is a set of resources and tools for software developers to build and manage web applications, web services, and websites.",
"Analytics platforms measure activity and behavior on a website, for example: how many users visit, how long they stay, how many pages they visit, which pages they visit, and whether they arrive by following a link or not.",
"A fictional character that represents a typical user of an app, website, or other product. A user persona helps clarify your target audience: It helps with design iteration.",
"Card sorting is a method used to help design or evaluate the information architecture of a site. In a card sorting session, participants organize topics into categories that make sense to them and they may also help you label these groups.",
"A wireframe is a two-dimensional illustration of a page's interface that specifically focuses on space allocation and prioritization of content, functionalities available, and intended behaviors. For these reasons, wireframes typically do not include any styling, color, or graphics.",
"A Gantt chart is a bar chart that illustrates a project schedule. It was designed and popularized by Henry Gantt around the years 1910–1915. Modern Gantt charts also show the dependency relationships between activities and the current schedule status.",
"A sitemap is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. Search engines like Google read this file to crawl your site more efficiently.",
"Journey Maps are a UX visualization document that showcases the steps that a user takes in a process to accomplish a goal.",
"Paper prototyping is a process where design teams create paper representations of digital products to help them realize concepts and test designs. They draw sketches or adapt printed materials and use these low-fidelity screenshot samples to cheaply guide their designs and study users' reactions from early in projects.",
"A collection of assets and materials intended to communicate the style, voice, direction, and language of a particular design, brand, or project.",
"A visual representation of a user's interaction with a product",
"It exists as a set of branding rules that guide how products should look and feel, details about typography, use cases for UI patterns, and more.",
"What the user believes about how a user experience works. Mental models are built in a user's brain and are based on what they know from past interactions with websites, mobile phones, and other interactive products.",
"Fast-paced, targeted testing of a website or app with real users in moderated sessions.",
"Your blueprint for how you're going to conduct UX activities. Not to be confused with the overall project plan (which is usually owned by a project manager or program manager), a UX project plan helps you think about how UX work will integrate with the broader project timeline.",
"collects quantitative and qualitative data about a user's interactions and experience with a website or digital product.",
"A form of process management that fast tracks incoming workflow by priority so the most critical work is attended to first.",
"a fast and practical way to solve problems or make decisions."
];
const concepts = [
  "UX",
  "UI",
  "UX Design",
  "Interaction Design",
  "Visual Design",
  "Anthro Design",
  "Graphic Design",
  "Human-Computer Interaction",
  "User Interaction",
  "Information Architecture",
  "Accessability",
  "Web Development",
  "Copywriting",
  "Marketing"
];
const research = [
  "User Problem/Discovery Statement",
  "User Research",
  "UX Project Plan",
  "Needs Assessment",
  "Guerrilla Research Method",
  "Design Research",
  "Content Strategy",
  "Case Studies",
  "Elevator Pitch",
  "Bathroom UX",
  "Design Brief",
  "Comparative Assessment Method",
  "Listening Tour Method",
  "Usability Studies",
  "Framework",
  "Metrics/Analytics"
];
const planning = [
  "Persona",
  "Card Sort",
  "Wireframes",
  "Gantt Chart",
  "Site Map",
  "Journey Map",
  "Paper Prototype",
  "Mood Boards",
  "Story Boards",
  "Style/Pattern Guides",
  "Mental Models"
];
const refinement = [
//  "Design Iteration",
  "Quick and Dirty Usability Test",
  "UX Questionaire",
  "Design Triage",
  "Finish Product",
  "Heuristics"
];
const allTerms = concepts.concat(research, planning, refinement);

function selectCategory(clicked) {
  if (clicked == "concepts" )
  {
    document.getElementById("term_list").innerHTML = "<p id='selected_category'>Concepts of UI/UX Design</p>";
    for (var i=0; i < concepts.length; i++){
      document.getElementById("term_list").innerHTML += "<li><a value='" + i + "' href='javascript:;' onclick='defineTerm(" + i + ")'>" + concepts[i] + "</a></li>";
    }
  }
  if (clicked == "research" )
  {
    document.getElementById("term_list").innerHTML = "<p id='selected_category'>Research</p>";
    for (var i=0; i < research.length; i++){
      document.getElementById("term_list").innerHTML += "<li class='terms'><a value='" + (i + concepts.length) + "' href='javascript:;' onclick='defineTerm(" + (i + concepts.length) + ")'>" + research[i] + "</a></li>";
    }
  }
  if (clicked == "planning" )
  {
    document.getElementById("term_list").innerHTML = "<p id='selected_category'>Planning</p>";
    for (var i=0; i < planning.length; i++){
      document.getElementById("term_list").innerHTML += "<li class='terms'><a value='" + (i + concepts.length + research.length) + "' href='javascript:;' onclick='defineTerm(" + (i + concepts.length + research.length) + ")'>" + planning[i] + "</a></li>";
    }
  }
  if (clicked == "refinement" )
  {
    document.getElementById("term_list").innerHTML = "<p id='selected_category'>Refinement</p>";
    for (var i=0; i < refinement.length; i++){
      document.getElementById("term_list").innerHTML += "<li class='terms'><a value='" + (i + concepts.length + research.length + planning.length) + "' href='javascript:;' onclick='defineTerm(" + (i + concepts.length + research.length + planning.length) + ")'>" + refinement[i] + "</a></li>";
    }
  }
};

function defineTerm(term) {
  document.getElementById("selected").innerHTML = "<h2>" + allTerms[term] + "</h2>";
  document.getElementById("def").innerHTML = definitions[term];
}

function clearScreen() {
    document.getElementById("term_list").innerHTML = "TERM OPTIONS";
    document.getElementById("selected").innerHTML = "SELECTED TERM POPS UP HERE!!";
    document.getElementById("def").innerHTML = "The correct definition will display here.";
}