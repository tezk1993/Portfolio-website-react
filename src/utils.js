export const getImageUrl = (path) => {
    return new URL(`/Assets/${path}`, import.meta.url).href;
  };

export const getLoremIpsum = (numWords) => { 
      
    // Lorem Ipsum text for demonstration purposes 
    const loremIpsumText = 
        `Lorem ipsum dolor sit amet, consectetur  
        adipiscing elit, sed do eiusmod tempor  
        incididunt ut labore et dolore magna  
        aliqua. Diam in arcu cursus euismod  
        quis viverra nibh. Nunc aliquet bibendum 
        enim facilisis gravida neque convallis  
        a cras. Sagittis purus sit amet volutpat 
        Consequat mauris. Duis ultricies lacus  
        sed turpis tincidunt id. Consequat interdum 
        varius sit amet mattis vulputate. Enim sed 
        faucibus turpis in eu. Ridiculus mus mauris 
        vitae ultricies leo integer malesuada nunc vel. 
        Nulla pharetra diam sit amet nisl suscipit. 
        Lobortis elementum nibh tellus molestie nunc 
        non blandit massa enim. Dis parturient montes 
        nascetur ridiculus mus. Justo nec ultrices dui 
        sapien eget. Enim tortor at auctor urna nunc. 
        Dictumst quisque sagittis purus sit amet volutpat 
        consequat mauris nunc. 
        
        Lorem ipsum dolor sit amet, consectetur  
        adipiscing elit, sed do eiusmod tempor  
        incididunt ut labore et dolore magna  
        aliqua. Diam in arcu cursus euismod  
        quis viverra nibh. Nunc aliquet bibendum 
        enim facilisis gravida neque convallis  
        a cras. Sagittis purus sit amet volutpat 
        Consequat mauris. Duis ultricies lacus  
        sed turpis tincidunt id. Consequat interdum 
        varius sit amet mattis vulputate. Enim sed 
        faucibus turpis in eu. Ridiculus mus mauris 
        vitae ultricies leo integer malesuada nunc vel. 
        Nulla pharetra diam sit amet nisl suscipit. 
        Lobortis elementum nibh tellus molestie nunc 
        non blandit massa enim. Dis parturient montes 
        nascetur ridiculus mus. Justo nec ultrices dui 
        sapien eget. Enim tortor at auctor urna nunc. 
        Dictumst quisque sagittis purus sit amet volutpat 
        consequat mauris nunc.
        
        Lorem ipsum dolor sit amet, consectetur  
        adipiscing elit, sed do eiusmod tempor  
        incididunt ut labore et dolore magna  
        aliqua. Diam in arcu cursus euismod  
        quis viverra nibh. Nunc aliquet bibendum 
        enim facilisis gravida neque convallis  
        a cras. Sagittis purus sit amet volutpat 
        Consequat mauris. Duis ultricies lacus  
        sed turpis tincidunt id. Consequat interdum 
        varius sit amet mattis vulputate. Enim sed 
        faucibus turpis in eu. Ridiculus mus mauris 
        vitae ultricies leo integer malesuada nunc vel. 
        Nulla pharetra diam sit amet nisl suscipit. 
        Lobortis elementum nibh tellus molestie nunc 
        non blandit massa enim. Dis parturient montes 
        nascetur ridiculus mus. Justo nec ultrices dui 
        sapien eget. Enim tortor at auctor urna nunc. 
        Dictumst quisque sagittis purus sit amet volutpat 
        consequat mauris nunc.
        
        Lorem ipsum dolor sit amet, consectetur  
        adipiscing elit, sed do eiusmod tempor  
        incididunt ut labore et dolore magna  
        aliqua. Diam in arcu cursus euismod  
        quis viverra nibh. Nunc aliquet bibendum 
        enim facilisis gravida neque convallis  
        a cras. Sagittis purus sit amet volutpat 
        Consequat mauris. Duis ultricies lacus  
        sed turpis tincidunt id. Consequat interdum 
        varius sit amet mattis vulputate. Enim sed 
        faucibus turpis in eu. Ridiculus mus mauris 
        vitae ultricies leo integer malesuada nunc vel. 
        Nulla pharetra diam sit amet nisl suscipit. 
        Lobortis elementum nibh tellus molestie nunc 
        non blandit massa enim. Dis parturient montes 
        nascetur ridiculus mus. Justo nec ultrices dui 
        sapien eget. Enim tortor at auctor urna nunc. 
        Dictumst quisque sagittis purus sit amet volutpat 
        consequat mauris nunc.
        
        Lorem ipsum dolor sit amet, consectetur  
        adipiscing elit, sed do eiusmod tempor  
        incididunt ut labore et dolore magna  
        aliqua. Diam in arcu cursus euismod  
        quis viverra nibh. Nunc aliquet bibendum 
        enim facilisis gravida neque convallis  
        a cras. Sagittis purus sit amet volutpat 
        Consequat mauris. Duis ultricies lacus  
        sed turpis tincidunt id. Consequat interdum 
        varius sit amet mattis vulputate. Enim sed 
        faucibus turpis in eu. Ridiculus mus mauris 
        vitae ultricies leo integer malesuada nunc vel. 
        Nulla pharetra diam sit amet nisl suscipit. 
        Lobortis elementum nibh tellus molestie nunc 
        non blandit massa enim. Dis parturient montes 
        nascetur ridiculus mus. Justo nec ultrices dui 
        sapien eget. Enim tortor at auctor urna nunc. 
        Dictumst quisque sagittis purus sit amet volutpat 
        consequat mauris nunc.`; 
  
  
    // Split the Lorem Ipsum text into words 
    const words = 
        loremIpsumText.split(" "); 
  
    // Ensure the number of words requested is  
    // within the bounds of the available words 
    if (numWords <= words.length) { 
        return words 
            .slice(0, numWords) 
            .join(" "); 
    } else { 
        return words.join(" "); 
    } 
} 