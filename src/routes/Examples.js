import React from 'react';
import { Example } from './Example';

import '../styles/style.css';

function Examples() {

    const EXAMPLES = [
        {
            number: "1",
            thumbnail: "example1.jpg",
            postTitle: "Code Examples",
            imageTitle: "The Git Version Control System",
            gitTutorial: "https://www.w3schools.com/git/git_intro.asp?remote=github",
            markdownTutorial: "https://opensource.com/article/19/9/introduction-markdown",
            description: `
            <p>It's very useful to have a few code examples, so here are some of my own systems.
            Pick over (and criticise if you wish) at your leisure. The links take you to my Github 
            repositories. If you've not used Github before, you might find it a bit intimidating.  
            Here are a few words of explanation.</p> 
            <p>Github is a free Microsoft service that gives you somewhere you can store and advertise source
            code on the web. But it's much, much more than that. It's a "versioned" archive in the sense that
            when you've updated your system in your own local project (which may also be a Git repository) you
            can "check in" the entire project under a new version number. So if you needed to back out  your
            update, you could just "check out" the previous version back to your local project. Additionally,
            however, Git allow you to track the changes made to individual files within the  </p>
            <p>Many projects are actually developed collaboratively using Github to allow contributors
            to freely "clone" a copy of the project and then issue a "pull request" to enable the owner
            of the repository to review the new submission before absorbing it into the project.</p>
            <p>Code within a repository is held in a conventional, clickable Folder/File structure. A Readme.md
            file is usually present to provide information about the purpose of the project and guidance
            on how you might use it. If you've not come across the .md extension before, this indicates
            that the file contains "mark-down" code - a sort of abbreviated html. This is an extremely useful
            file format and I suggest you check it out on the web.</p>`,
        },

        {
            number: "2",
            thumbnail: "example2.jpg",
            postTitle: "The 'Beag air Bheag Companion'",
            imageTitle: "The 'Beag air Bheag Companion'",
            webappUrl: "https://bablite.web.app/",
            gitCodeUrl:"https://github.com/mjoycemilburn/bablite",
            description: `
            <p>If you've not yet migrated to React and are still working directly in the browser DOM, the
            "Beag air Bheag" webapp might be a good place to check out for code examples.</p>
            <p>This is an application with a deep history. I have an abiding interest in Scottish Gaelic and 
            Beag air Bheag ("little by little") was a radio programme designed to assist Gaelic learners. I wrote
            the webapp to help me study podcasts from the programme.</p>
            <p>Over the years, the code has tracked my parallel interest in software development technologies, so
            the original PHP version has now evolved into a Firebase webapp. The code has still to make it into React,
            but if you've yet not made that step yourself, the BaB webapp may be well worth a look because it shows
            just how far you can go with 'freestyle' Javascript.</p>
            <p>For example, there's a sound player there and a simple text editor. The design is responsive to the
            extent that it will work on both a laptop and an iphone.</p>
            <p>If you would like to try the webapp, click the title above. There's a login, but registration is
            free of charge.</p> 
            `
        },

        {
            number: "3",
            thumbnail: "example3.jpg",
            postTitle: "Milburn Parish Council website",
            imageTitle: "Milburn Village, Cumbria",
            webappUrl: "https://mpclite.web.app/",
            gitCodeUrl: "https://github.com/mjoycemilburn/pclitewebapp/tree/master/public",
            description: `
            <p>Here in the UK, villages like mine have a 'Parish Council' to look after local interests. UK Parish Councils 
            are required by law to publish their proceedings on the web.</p>
            <p>You'd think there would be a national system for this but everybody seems to prefer to do their own thing!</p>
            <p>But this suits me fine because, over the years, this application has proved perfect for trying out successive 
            waves of system-development technology.</p>
            <p>It needs a simple public viewer plus an easy-to-use configuration and maintenance app to allow the Parish Clerk 
            to add new material. Underpinning this you need both a structured database and some networked
            conventional file storage. Finally, the maintenance app also needs some sort of security arrangement.</p>
            <p>The latest incarnation uses Javascript, Firebase and React. It has been a revelation! It contains much less 
            code than any of its predecessors and is also much more readable. It was extremly easy to write and debug.</p>
            The viewer UI (ie user interface) is deliberately austere - I don't do 'fancy'. The maintenance
            webapp is protected by a Google login, so I'm afraid you can't give it a try. You can see the code, though. It's 
            in a pclitemanagerwebapp version of the pclitewebapp repository. </p>
            <p>You might be interested to have a look at how the maintenance webapp uses 'drag and drop' 
            (courtesy of 'react-beautiful-dnd') to maintain the order of website sections.</p>
            `
        },

        {
            number: "4",
            thumbnail: "example4.jpg",
            postTitle: "ngatesystems.web.app",
            imageTitle: "An introduction to modern IT Systems Development Techniques",
            webappUrl: "https://ngatesystems.web.app/",
            gitCodeUrl: "https://github.com/mjoycemilburn/ngatesystems",
            description: `
            <p>If you would like to see a bit more "Reactified" Javascript, together with  a "page" structure
            (courtesy of 'react-router') and some modest ambitions to provide a "responsive" display - one that
            adapts itself to the dimensions of the display on which it renders its output - you might
            be interested to have a look at the code of the ngatesystems.web.app webapp itself.</p>
            <p>I wrote this because I've enjoyed using React so much that I wanted to explore a bit more of this
            extraordinary technology whilst also investigating the use of "routes" to implement a virtual page
            structure within a 'single-page' webapp.</p>
            <p>I think it works a treat!</p>
            `
        },

    ]

    return (

        // The "map" method below applied to array returns a new array with every element
        // transformed by the function inside map()

        <div className="CardsContainer">
            {EXAMPLES.map((post) => (
                <Example className="CardContainer" key={post.number} post={post} />
            ))}
        </div >

    );
}

export { Examples } 