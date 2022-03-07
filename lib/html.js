module.exports = {
    createHTML(teamARR) {
        const htmlarr = [];
        const htmlhead = 
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width = device-width, initial scale = 1.0">
                <title>${teamARR[0]}</title>
            </head>`;
            
            htmlarr.push(htmlhead);

            for (let i=1; i<teamARR.length; i++) {
                let htmlbody =
                `<body>
                <h1>${profileName}</h1>
                <br>`;

                if (teamARR[i].role ==="Manager") {
                    `
                    <div>
                    <h2>${managerRole}</h2>
                    <p>${managerName}</p>
                    <p>${managerID}</p>
                    <p>${managerEmail}</p>
                    <p>${managerNumber}</p>
                    </div>
                    `
                }
                else if (teamARR[i].role ==="Engineer") {
                    `
                    <div>
                    <h2>${engineerRole}</h2>
                    <p>${engineerName}</p>
                    <p>${engineerID}</p>
                    <p>${engineerEmail}</p>
                    <p>${engineerGithub}</p>
                    </div>
                    `
                }
                else if (teamARR[i].role ==="Intern") {
                    `
                    <div>
                    <h2>${internRole}</h2>
                    <p>${internName}</p>
                    <p>${internID}</p>
                    <p>${internEmail}</p>
                    <p>${internSchool}</p>
                    </div>
                    `
                };
            htmlarr.push(htmlbody);
            };
        const htmlend = 
        `    
        </body>
        </html>
        `;
        htmlarr.push(htmlend);

        return htmlarr;
    }
};