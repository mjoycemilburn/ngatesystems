import React from 'react';
import { Waypoint } from './Waypoint';

import '../styles/style.css';

function Waypoints() {

    const POSTS = [
        {
            number: "1.1",
            thumbnail: "waypoint1-1.jpg",
            title: "Introducing Google's Firebase - leveraging basic skills to deliver powerful IT systems",
            description: `
            <p>The IT world is a challenging place for newcomers. It's a bit like the sea - overwhelmingy strange and vast, 
            constantly changing and full of hidden dangers. </p> 
            <p>Navigating your way through this lot is always going to be a tricky business. If you're going
            to survive here you're going to need some good equipment - and a chart. </p> 
            <p>This waypoint tutorial shows you the equipment and tools you are going to need. It doesn't tell
            you in detail how to use this equipment, but it  will at least give you a flavour of its capabilities 
            and tells you where to go to find out more.</p>
            <p>Amazingly, each tool, together with all its documentation, comes completely free of charge!</p>  
            <p>Additionally, and most importantly, what this tutorial <span style='color: rgb(255, 124, 12);'>does</span>
            do is to map out a course whereby mastery of these tools will build skills that lead you unerringly towards
            your destination and enable you to achieve some truly powerfully results.</p>`,
            url: "https://dev.to/mjoycemilburn/a-path-through-the-jungle-a-quick-and-easy-and-completely-free-way-of-achieving-practical-results-in-the-world-of-it-21ei"
        },

        {
            number: "2.1",
            thumbnail: "waypoint2-1.jpg",
            title: "A beginner's guide to Firebase V9 - Project configuration",
            description: `
            <p>If you really are new to the IT world, the first stage of your journey will have left
            you confused and depressed. Cheer up though - things will get better once you've had a bit more 
            practice. We're all still learning in this profession.</p>
            <p> But you're at a critical point now so stick with it - once you get through this chapter
            you'll have actually launched your first webapp. It will just be a demonstrator provided by Google
            but nevertheless you will have created it</p>
            <p>This chapter also takes things at a very gentle pace - there are one or two scary experiences
            here, so take your time and don't rush things. What we have to do is create the project "scaffolding"
            that will enable us to proceed to more useful things.</p>
            <p>Onward and upward!</p>`,
            url: "https://dev.to/mjoycemilburn/a-beginners-guide-to-javascript-development-using-firebase-v9-part-1-project-configuration-5bo3"
        },

        {
            number: "2.2",
            thumbnail: "waypoint2-2.jpg",
            title: "A beginner's guide Firebase V9 - Coding a simple webapp",
            description: `
            <p>At last! Here's your chance to to some real coding and build something that does something useful.</p>            
            <p>Well, actually the sample webapp we'll build here is pretty useless, but it contains all the ingredients
            that you'll find in a serious application - a realistic user interface to a proper database.</p>
            <p>If you manage to get through this stage successfully, from here on you'll be flying</p>
            <p>A couple of words of advice though. There'll be moments when inscrutable error messages pile up
            in your browser's console and everything you do just seems to make things worse. At moments like this,
            websites like stackoverflow are a life-saver. Whatever is foxing you will have been reported by someone else,
            and will have received an answer. If all else fails, I recommend you read the error message closely
            and the go for a long walk while you think about it!</p>`,
            url: "https://dev.to/mjoycemilburn/a-beginners-guide-to-javascript-development-using-firebase-v9-part-2-coding-a-simple-webapp-4e5i"
        },

        {
            number: "3.1",
            thumbnail: "waypoint3-1.jpg",
            title: "Getting serious with Firebase V9 - Moving to 'ECMA modules'",
            description: `
            <p>With Firebase V9, Google introduced new "modular" versions
            of its Firebase libraries. ECMA is the standards organisation behind the new syntax
            and "ECMA modules" have enabled Google to provide an arrangement that will make
            your webapps leaner and faster.</p>
            <p>We've not used the modular libraries earlier in this series because they
            introduce some mild complications. Up to now, while you were still up to your neck in
            alligators, you already had quite enough to deal with!</p>
            <p> Now, however, it's time to bite the bullet and learn some new, professional skills.`,
            url: "https://dev.to/mjoycemilburn/getting-serious-with-javascript-development-and-firebase-v9-part-1-moving-to-ecma-javascript-modules-2b7p"
        },

        {
            number: "3.2",
            thumbnail: "waypoint3-2.jpg",
            title: "Getting serious with Firebase V9 - Using the Firebase emulators",
            description: `
            <p>Once you've implemented your system, testing any changes you might want to make
            becomes quite a challenge.</p>
            <p>In the past if something went wrong, you only had yourself to worry about. Once you have users - 
            possibly users who are paying for that privilege - you have to assume that things 
            <span style='color: rgb(255, 124, 12);'>will</span> go wrong - webapps may freeze and databases
            may be trashed - and take steps to make sure that this has no consequences.</p>
            <p>The Firebase simulator gives you a "sandbox" that allows you to run your code changes. When you're
            using the simulator, you can be completely confident that if your code fails, it won't cause any damage. 
            Code is built into sandbox webapps/functions, and file access targets parallel collections and storage buckets</p>
            <p>As you'll see, setting up the simulation environment is not something you'll take on lightly, 
            but I'm afraid this is just where serious IT gets hard. Get used to it!</p>`,
            url: "https://dev.to/mjoycemilburn/getting-serious-with-firebase-v9-part-2-using-the-firebase-emulators-15ll"
        },

        {
            number: "3.3",
            thumbnail: "waypoint3-3.jpg",
            title: "Getting serious with Firebase V9 - Background processing with Cloud Functions",
            description: `
            <p>Behind the online "front-of-house" user-interfaces of any large, serious application you will almost
            always find an array of background processes. Some of these will be:
                <ul>
                    <li> moving data around and consolidating it in order to maintain efficiency. </li></br>
                    <li> providing management with reports and statistics.</li></br>
                    <li> picking up tasks "best left until later" by an online transaction.</li> 
                </ul>
            <p>Some sort of "engine-room" capability is required to handle these tasks. In Firebase, this is handled
            through "functions". You'll enjoy this bit!</p>`,
            url: "https://dev.to/mjoycemilburn/getting-serious-with-firebase-v9-part-3-background-processing-with-cloud-functions-2di7"
        },

        {
            number: "3.4",
            thumbnail: "waypoint3-4.jpg",
            title: "Getting serious with  Firebase V9 - Cloud Storage: Code Patterns for File Upload, Reference, Delete and Download",
            description: `
            <p>All the permanent data storage you've seen so far in this series has been delivered through Firestore
            database collections. This isn't going to be very useful to you when you need to store images and
            videos etc.</p>
            <p>Google's response to this requirement is its vast Cloud Storage capability. This is a mind-numbingly
            sophisticated arrangement. Google's servers are spread throughout the globe, ensuring that you can always
            find storage close to your users' location and with guaranteed levels of security and performance.</p>
            <p>Later in this series, you'll see that Cloud Storage also has a role to play when come to consider 
            database backup and recovery arrangements. 
            `,
            url: "https://dev.to/mjoycemilburn/https://dev.to/mjoycemilburn/getting-serious-with-firebase-v9-part-4-cloud-storage-uploading-files-3p7c-serious-with-firebase-v9-part-3-background-processing-with-cloud-functions-2di7"
        },

        {
            number: "4.1",
            thumbnail: "waypoint4-1.jpg",
            title: "Getting Professional with Firebase V9 - 'System Hygiene' - Error-handling and Transactions",
            description: `
            While your webapp can be coded to ensure that predictable errors will experience a soft landing, there will always
            be the unpredictable - connection failures, for example. Your users will be much happier if there is never a 
            time when your system them leaves them with a blank or frozen screen.</p>
            <p>This post describes how you can code your webapp to arrange this. You might even use these techniques when 
            you're tracking down error-cases during system developmen.t</p>
            `,
            url: "https://dev.to/mjoycemilburn/41-getting-professional-with-firebase-v9-system-hygiene-error-handling-and-transactions-36jf"
        },

        {
            number: "4.2",
            thumbnail: "waypoint4-2.jpg",
            title: "Getting Professional with Firebase V9 - Creating a Disaster Recovery system",
            description: `
            <p>Once you've got your data safely tucked away in a Firestore database you can be pretty confident that
            Google won't lose it for you. But what about all the other things that might go wrong?</p>
            <p>Probably the biggest hazard, I regret to say, is you yourself. Yes, all the testing in the world won't
            always be enough to ensure that the release of a new version of your application doesn't insert some
            unforeseen kink into your database. Banking systems have been brought to their knees in this way</p>
            <p>But beyond this there's the possibility that malicious activity might view your data as an attractive 
            target</p>
            <p>Yes, a backup system might help you sleep at night! This post shows you how you might set this up.</p>
            `,
            url: "https://dev.to/mjoycemilburn/42-getting-professional-with-firebase-v9-creating-a-backup-system-25gd"
        },

        {
            number: "5.1",
            thumbnail: "waypoint5-1.jpg",
            title: "Getting Employable with Firebase - Building your webapp with React",
            description: `
            <p>This course has shown you pretty much everything you need to produce a useful online Information System. Unfortunately,
            if you were thinking of looking for employment in the IT industry, this might still not be enough to get you through an 
            interview.</p>
            <p>Why?? Well, everything you've learnt is useful experience, but employers are looking for something in addition. I think
            you might sum this up in one word - discipline. Modern IT is an engineering profession, with all that this implies. Your
            "wild-west" Javascript coding style isn't going to fit here until it conforms to certain accepted patterns. 
            <p>The profession now uses a variety of frameworks and libraries to marshall system design and coding along prescribed 
            channels.</p>
            <p>This post describes one of the most popular of these systems - a library called React. Yes, I know it's yet
            another slab of concepts and jargon to get your aching head round but, believe me when I say this, once you've tried
            React on a few webapps, you won't want to do things any other way. It's a perfect joy to work with.</p>
            `,
            url: "https://dev.to/mjoycemilburn/51-getting-employable-with-firebase-building-your-webapp-with-react-259e"
        },

        {
            number: "6.1",
            thumbnail: "waypoint6-1.jpg",
            title: "Reference - Firestore CRUD templates for Firebase V9",
            description: `
            <p>Javascript is so flexible that the same task can almost always be coded in a myriad of different
            ways. This is not always a good thing - in programming it's usually better to adopt a style
            that suits you and then stick with it. This way you have to think less when you're creating something new
            and, if you have to go back and amend things later, the code looks familiar and you immediatley feel "at home" </p>
            <p>So I like to use patterns - code templates that are flexible enough to to meet most of your rqeuirements
            and which you can easily adjust to suit particular circumstances. </p>
            <Here's the patterns I use for routine Firestore CRUD (Create, Read, Update and Delete) operations</p>
            `,
            url: "https://dev.to/mjoycemilburn/23-a-beginners-guide-firebase-v9-a-quick-summary-of-firestore-crud-commands-35h6"
        }

    ]

    return (

        // The "map" method below applied to array returns a new array with every element
        // transformed by the function inside map()

        <div className="CardsContainer">
            {POSTS.map((post) => (
                <Waypoint className="CardContainer" key={post.number} post={post} />
            ))}
        </div >

    );
}

export { Waypoints } 