
import Image from "next/image";
export default function Home() {
  return (
    <main className="font-arial px-8 text-sm font-normal">
      <h2 className="text-2xl font-bold pt-8">2024 CSE Exercise</h2>
      <div className="text-base font-semibold">
      <p className="px-16 pt-10 text-base font-semibold"> Q1. Rank your 5 most favourite and 5 least favourite 
        support tasks. Provide a brief explanation for each.</p>
      <p className="text-sm font-bold text-grey-600/80 pt-2 px-16"> My 5 Most Favorite Tasks</p>
      <h3 className="opacity-75 font-semibold text-sm px-16">
        <p>1. Dig through logs to troubleshoot a customer's broken project</p>
        <p className="px-6 font-normal italic">
          I firmly believe that the customer comes first, and it's imperative to provide them with an 
          excellent support experience. If a customer's project is broken, causing them to be in a critical 
          state or impacting their business, my top priority would be to get them back up and running 
          as quickly as possible. I am committed to assisting them using all available means, aligning with 
          Vercel's values of ownership and excellence.
        </p>
          
        <p>2. Analyze hundreds of support tickets to spot trends the product team can use</p>
        <p className="px-6 font-normal italic">
          This cross-functional collaboration is crucial for ensuring the product's robustness and stability. 
          Creating insight reports helps in understanding and eliminating repetitive issues. In a company that values
           customer satisfaction and provides world-class products, proactively finding and resolving issues is essential.
        </p>
        
        <p>3. Work with the product team to develop a new feature based on feedback from customers</p>
        <p className="px-6 font-normal italic">
          It is crucial to understand customers' needs, review and analyze them to ensure alignment with the product 
          vision, and ultimately convert these needs into product features. Collaborating with the product team to 
          integrate these features into the product roadmap aligns with Vercel’s values of innovation and customer 
          obsession. This approach can significantly improve customer satisfaction and simplify workflows for end users.
        </p>
          
        <p>4. Work with engineering teams during incidents and provide updates to internal and external stakeholders</p>   
        <p className="px-6 font-normal italic">
          This is a crucial aspect for maintaining transparency and ensuring stakeholder trust in the product and services. 
          It is essential to act as a bridge between stakeholders and engineering during incidents and to ensure there are no 
          roadblocks.
        </p>
          
        <p>5. Write and maintain support articles and docs pages</p>
          <p className="px-6 font-normal italic">
              Updating documentation not only assists internal teammates in addressing issues but also empowers users to 
              resolve problems on their own by referring to the help center. This practice promotes collaboration and 
              excellence within the support team and is instrumental in training and onboarding new support members.
        </p>
      </h3>
        
      <p className="text-sm font-bold text-grey-600/80 pt-4 px-16"> My 5 Least Favorite Tasks</p>
      <h3 className="opacity-75 font-semibold text-sm px-16">
         <p>1. Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites</p>
            <p className="px-6 font-normal italic">
              While community engagement is valuable, this task might not be the best use of in-depth technical skills and 
              problem-solving abilities.
            </p>
          
          <p>2. Respond to 25+ support requests via email every day</p>
            <p className="px-6 font-normal italic">
              While customer interaction is important, the high volume of repetitive tasks might not fully utilize team's 
              advanced technical skills and strategic thinking.
            </p>

          <p>3. Work with people to figure out if Vercel is suitable for their use case</p>
             <p className="px-6 font-normal italic">
                This task seems to be more about pre-sales, which might not align with my technical expertise and experience.
            </p>

          <p>4. Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems</p>
            <p className="px-6 font-normal italic">
              While customer interactions are essential, it's optimal to engage with customers individually to grasp the u
              niqueness of their problems within their environment and tailor solutions accordingly. Often, a 
              one-size-fits-all approach falls short and can lead to ambiguity.
            </p>
          
          <p>5. Help resolve billing issues for customers</p>   
            <p className="px-6 font-normal italic">
              If these billing issues are related to account then they are not directly related to my technical expertise, 
              making this task less appealing.
            </p>
      </h3>
    
      <p className="px-16 pt-10"> Q2. What do you want to learn or do more of at work? </p>
      <div className="px-16 opacity-75 font-normal text-sm ">
        <p> I want to excel as Senior Customer Success Engineer at Vercel while continuing my journey of professional and 
          technical development. I want to use my past experiences and leverage my skills to deliver exceptional customer 
          service, with a focus on empathizing with customer's needs and ensuring their success with Vercel’s platform. I want 
          to contribute to the success of the team by fostering a collaborative and transparent environment that encourages 
          knowledge sharing and operational efficiency, ultimately enhancing the overall customer experience. <br></br> 
        Additionally, I am keen to enhance my proficiency in building web applications using technologies like React and 
        Next.js. Also, I am excited to delve deeper into cloud-based solutions and serverless computing, as these areas 
        align with Vercel's expertise and can broaden my skill set to better serve our customers. </p>
      </div>
     
     <p className="px-16 pt-10">Q3. Describe how you solved a challenge or technical issue that you faced in a previous 
      role(preferably in a previous support role). How did you determine that your solution was successful?</p>
      <ul className="list-none indent-0 px-16 opacity-75 font-normal text-sm">
        <li> There are several examples of dealing a challenging situation. One such example is below: </li>
        <li> Case scenario - Partners were using Netflix application to send call sheet (it's the email that tell 
          recipient if they should be present in the shoot tomorrow or not and if they need to be present then what all
           job they need to do) to the crew. They send this distribution email usually around end of business and 
           delivery of this email is important. If crew member doesn’t receive it then they will not come to shoot
           next day and it can result into loss of time and money. </li>
        <li> Problem - Email distribution started to fail as Netflix server has strict rules around email content and 
          recipient’s addresses to avoid any malicious attacks and spams. Support was getting multiple calls from 
          different partners that they have to check emails delivery after sending out the email and sometimes they are 
          using alternate method like text message or use other email system to ensure crew receives the message. This 
          was frustrating for partners and they were loosing trust in the application. </li>
        <li> Troubleshooting - We checked mail server logs and discovered that emails are not going out as our mail 
          server is marking them as malicious and putting recipient in suppression list. There were various reasons for 
          that - email content contain images, big attachments or user accidentally opted out or unsubscribed from the 
          mailing list or user domain name seems suspicious. Workaround was to remove user’s email from suppression list 
          so that they can receive emails but with thousands of recipients it wasn’t feasible solution. Also, we wanted 
          to proactively prevent this from happening rather than using reactive approach. </li>
        <li> Solution - We work with engineering and came up with solution of moving distribution email to different 
          mail server than streaming server and lowering down the distribution server guardrails. It wasn't easy 
          change to make due to different teams involved and we collected different data points - customers impacted, 
          estimate loss of customer's time and potentital risk invovled, customer's dissapointing written feedback to 
          support, and presented effective data story with business impacted and potentital solution. Once change was 
          made we continue to monitor email distribution failure for a month using Kibana dashboard and ensure that 
          issue is completely resolved. </li>
      </ul>
      
      <p className="px-16 pt-10">Q4. When would you choose to use Edge Functions, Serverless Functions, or Edge 
        Middleware with Vercel? </p>
      <ul className="list-disc indent-0 px-20 opacity-75 font-normal text-sm">
        <li>Edge functions are use for tasks needing ultra-fast response times, serving content based on user's 
          geolocation, for dynamic content rendering like A/B testing or personalized marketing content and for checking 
          user's authentication or handling authorization at the edge before reaching the main application.</li>
        <li>Serverless functions are use for backend tasks that don’t require immediate response like operations 
          performing database queries, CRUD operations, handling background jobs and for creating and managing API 
          endpoints.</li>
        <li>Edge Middleware is use for request interception and modification, access control, SEO optimization, and 
          conditional routing.</li>
      </ul>

      <p className="px-16 pt-10">Q5. Imagine a customer writes in requesting help with a build issue on a framework or 
        technology that you've not seen before. How would you begin troubleshooting this and what questions would you 
        ask the customer to understand the situation better? </p>
      <div className="opacity-75 font-normal text-sm px-16"> 
      I’ll try to first ensure that I have clear understanding of the issue before diving further. In order to have 
      better understanding of the issue I will ask following information from the customer: 
        <ul className="list-disc   px-4">
          <li>What framework or technology are you using? Provide the exact version.</li>
          <li>What are the steps involved in the build process? Are there any build tools or automation scripts being 
            used?</li>
          <li>At what stage does the build fail?</li>
          <li>Share any error messages or logs from the build process.</li>
          <li>Have there been any recent changes to the codebase, configuration, or environment?</li>
          <li>Have you tried building the project on a different machine or environment?</li>
          <li>Have you encountered this issue before? What steps have been taken to resolve it?</li>
          <li>Are there any recent update in any specific dependencies or libraries needed during build process. </li>
        </ul>
        <p className="pt-2">After collecting all relevant information, I would start by researching our internal 
          knowledge base and other available online resources for any relevant information. I would try to look for 
          any obvious misconfigurations, missing dependencies, or compatibility issues. I can also investigate build 
          logs to find more information. Another thing worth trying is to replicate the issue in an in-house environment. 
          This controlled setting allows for flexibility in experimenting with different solutions and debugging the issue 
          effectively.</p>
       </div>

       <p className="px-16 pt-10">Q6. The customer from question 5 replies to your response with the below:
      “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform 
      issue so just fix it for me instead of asking me questions.”
      Please write a follow-up reply to the customer.</p>
      <div className="px-16 opacity-75 font-normal text-sm ">
        Sample reply to customer:
        <div className="px-6 pt-2 font-normal italic"> 
          Dear Customer, 
        <p className="pt-1"> I understand how frustrating it can be to deal with such issues, especially after spending 
          hours trying to resolve them. Your experience is important to us, and I’m here to help you get this sorted out 
          as quickly as possible. </p>
        <p className="pt-1"> To ensure I can provide the most effective solution, I need to gather some additional 
          information. This will help me pinpoint the exact cause of the issue and determine whether it's a platform 
          problem or something else. Could you please provide me with the following details: </p>
        <ul className="list-disc   px-4">
          <li>The specific error messages or codes you are seeing.</li>
          <li>The steps you’ve already taken to troubleshoot the issue.</li>
          <li>Any relevant build logs or screenshots that might help us understand the problem better.</li>
        </ul>
        <p className="pt-2"> If it helps we can set up a quick call so that I can collect all relevant information 
          during the call. In parallel, I will also start looking into potential platform issues on our end. Your 
          cooperation will greatly speed up the resolution process.</p>
        <p className="pt-1"> Appreciate your time and patience and I assure you we will do everything we can to resolve 
          this swiftly.</p>

        <p className="pt-2"> Best regards,</p>
        <p> Shweta</p>
        <p> Senior Customer Success Engineer </p> 
        <p> Vercel</p>
        </div>
      </div>

      <p className="px-16 pt-10">Q7. A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog
path to https://example.com?" Please write a reply to the customer. Feel free to add any
information about your decision making process after the reply.</p>
<div className="px-16 opacity-75 font-normal text-sm ">
        Sample reply to customer: 
        <div className="px-6 pt-2 font-normal italic whitespace-pre-line"> 
        Dear Customer, 
          <p className="pt-1"> Thank you for reaching out to us. 
            I'd be happy to help you set up a redirect. To achieve this, you can either use Vercel's configuration file 
            (vercel.json) or next.config.js file to specify the redirect</p>
          <p className="pt-1"> The choice between next.config.js and vercel.json depends on your specific needs and the 
            complexity of project. If you're deploying a Next.js application to Vercel, you can define redirects directly 
            in your next.config.js file to keep all your Next.js configuration in one place. This is the preferred way to 
            set them up in your Next.js application as they have precedence over platform-level redirects. However, if 
            you're using a mix of different frameworks in your project then it might be easier to manage your redirects 
            n vercel.json as vercel.json allows you to define project-wide configuration rules. </p>
          <p className="pt-4 font-bold"> Using next.config.js (for Next.js redirects)</p>
          <ol className="list-decimal px-4">
            <li>Create or open your next.config.js file in the root of your Next.js project.</li>
            <li>Add the following configuration to set up the redirect:</li>
            <Image
                src="/Q7NextJS.png"
                className="dark:invert opacity-90"
                width={500}
                height={240}
                priority
            /> 
            <li>Deploy your changes to Vercel</li>
            <li>Test your redirects thoroughly to ensure they work as expected. Use a <a href="https://vercel.com/docs/deployments/preview-deployments" class="text-blue-600"> 
              preview deployment</a> to test redirects before deploying them to production</li>
          </ol>
          <p className="pt-4 font-bold"> Using vercel.json (for non-Next.js redirects) </p>
          <ol className="list-decimal px-4">
            <li> Create or open your vercel.json file in the root of your project. </li>
            <li> Add the following configuration to set up the redirect:</li>
            <Image
                src="/Q7.png"
                className="dark:invert opacity-90"
                width={500}
                height={240}
                priority
            />            
            <li>Deploy your changes to Vercel</li>
            <li>Test your redirects thoroughly to ensure they work as expected. 
              Use a <a href="https://vercel.com/docs/deployments/preview-deployments" class="text-blue-600"> 
              preview deployment</a> to test redirects before deploying them to production</li>
          </ol>
          <p className="pt-2"> If you encounter any issues or need further assistance, please don’t hesitate to reach out.</p>
          <p className="pt-2"> Best regards,</p>
          <p> Shweta</p>
          <p> Senior Customer Success Engineer </p> 
          <p> Vercel</p>

        </div>

        <p className="pt-4 font-bold text-sm"> Decision Making Process </p>
        <ul className="list-disc   px-4">
          <li> Understand user's ask </li>
          <li>Looked into    
            <a href="https://vercel.com/docs/edge-network/redirects" class="text-blue-600"> vercel documentation</a> to find information
          </li>
          <li> Share information with user using easy to follow instructions along with code snippet </li>
          <li> Share multiple options with user alongwith additional information so that customer can take informed 
            decision</li>
          <li> Ensuring that customer test the change before deploying to production </li>
          <li> Encouraging the customer to reach out if they encounter issues to ensure they feel supported throughout 
            the process.</li>
        </ul>
        
  </div>

  <p className="px-16 pt-10">Q8. A customer is creating a site and would like their project not to be indexed by search engines. 
    Please write a reply to the customer. Feel free to add any information about
  your decision making process after the reply. </p>
  <div className="px-16 opacity-75 font-normal text-sm ">
        Sample reply to customer: 
        <div className="px-6 pt-2 font-normal italic whitespace-pre-line">
          Dear Customer, 
          <p className="pt-1"> Thank you for reaching out to us. If you want to ensure that your project is not indexed 
            by search engines, you can use the <code className="font-mono font-bold">X-Robots-Tag</code> HTTP header or the <code className="font-mono font-bold">robots.txt</code> file. </p>
            <ol className="list-decimal pt-4 px-4"> 
              <li>
                <p className="font-bold"> X-Robots-Tag HTTP Header:</p> 
                In Vercel, Preview Deployments are not indexed by search engines by default because the <code className="font-mono">X-Robots-Tag</code> HTTP header is set 
                to<code className="font-mono"> noindex</code>. If you want to apply this to your production deployment, you can inject 
                the <code className="font-mono ">X-Robots-Tag: noindex </code>header using your framework's built-in methods or modify the <code className="font-mono">Header </code>object in your <code className="font-mono">vercel.json</code> file.<br className="pt-4"></br>
                Example of how to inject the header using your framework's built-in methods:
                <Image
                src="/Q8RobotsTagbuiltin.png"
                className="dark:invert opacity-90"
                width={500}
                height={240}
                priority
                /> <br className="pt-4"></br>
                Example of how to modify the Header object in your vercel.json file:
                <Image
                src="/Q8VercelConfig.png"
                className="dark:invert opacity-90"
                width={270}
                height={140}
                priority
                />
              </li>
              <li>
                <p className="font-bold pt-4"> Robots.txt:</p> 
                You can also use a <code className="font-mono">robots.txt</code> file to tell search engine crawlers which URLs they can't access on your site.<br></br>
                Example of a robots.txt file that disallows all bots from crawling your site:
                <Image
                src="/Q8RobotsTxt.png"
                className="dark:invert opacity-90"
                width={200}
                height={150}
                priority
                /> <br className="pt-4"></br>
                Remember to place the robots.txt file in the root of your app directory.
              </li>
            </ol>
          <p className="pt-4"> Once changes are made then make sure to test your application completely before deploying changes into production </p>
          <p className="pt-2"> If you encounter any issues or need further assistance, please don’t hesitate to reach out.</p>
          <p className="pt-2"> Best regards,</p>
          <p> Shweta</p>
          <p> Senior Customer Success Engineer </p> 
          <p> Vercel</p>
        </div>

        <p className="pt-4 font-bold text-sm"> Decision Making Process </p> 
        <p className="font-normal text-sm"> (Same as in exercise above)</p>
        <ul className="list-disc pt-2 px-4">
          <li>Identify the requirement </li>
          <li>Research for solution. Used     
            <a href="https://vercel.com/docs" class="text-blue-600"> vercel documentation </a> 
            in this case.
          </li>
          <li> Ensure clarity in communication </li>
          <li> Encouraging the customer to reach out if they encounter issues to ensure they feel supported throughout 
            the process.</li>
        </ul>
  </div>
 
  <p className="px-16 pt-10">Q9. What do you think is one of the most common problems which customers ask Vercel for
help with? How would you help customers to overcome common problems, short-term
and long-term? </p>
<div className="px-16 opacity-75 font-normal text-sm ">
   Here is a <a href="https://sdk.vercel.ai/docs/troubleshooting/common-issues" class="text-blue-600">list of common issues</a> along with solution that customers might encounter.  
   <p className="pt-2"> In addition to this I believe one of the most common problems that customers ask Vercel for help with is build and deployment issues. 
    Short term solution for that would be to provide <code className="font-bold">immediate solutions or workarounds</code> based on the collected 
    information. This can involve directing customer to correct knowledge base article, video tutorial or FAQs, working with them in a live debugging session </p> 
    <p className="pt-2"> Long term solution would be <code className="font-bold">preventive measures </code>like educating customers via webinars, workshops etc, creating self serve help center, gather customer feedback to improve tools and processes, create alerts, 
    metrics and dashboards to proactively catch issue before customer starts reporting it.</p>
  </div>

  <p className="px-16 pt-10">Q10. How could we improve or alter this familiarisation exercise? </p>
  <div className="px-16 opacity-75 font-normal text-sm pb-16">
      This is a good exercise to familiraze yourself with Vercel's platform and next.js language. Also, it has mix set of problems 
      to understand candidate's skill set - technical expertise, soft skills, customer centric approach etc. I enjoy working on these 
      questions. However, if I have to alter something in this exercise then I would provide either sample template to use in the project 
      or cheat sheet for different styling tags. It took me some time to figure out what is the syntax for tags as it was different than 
      regular HTML tags and I would rather spend my time and focus in answering questions rather than looking what format should I use for 
      font color, size etc. I faced some challenge while using whitespace-pre-line and some other tags and I spend significant time playing 
      around with that.<br></br>
      Other than that I enjoyed working on this exercise with mix of real world problems, debugging issues and 
      general aptitude questions. Thanks for considering me for the role and providing me with a chance to play 
      around with vercel platform, use vercel AI embedded search in vercel documentation - helpful tool while working on the exercise
      
  </div>


       </div>  
    </main>
  );
}
