const teamarr = require("../index")

const profilename = function(data){
    return `
    ${profileName}  
    `;
};



const fullPage = function (personnelSections) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${profilename}</title>
    </head>
    <body>
        <h1>${profilename}</h1>

        ${personnelSections}

    </body>
    </html> 
    `;
};

const personnelSections = function ([teamARR]) {
    let sections = [];

    for (let i=0; i<data.length; i++) {
        const teamARR = data[i];

        if (data.role === "Manager"){
            const managerSection = function (Manager) {
                return `
                <div>
                <h3>Manager</h3>
                <ul>
                    <li>${managerName}</li>
                    <li>${managerID}</li>
                    <li>${managerEmail}</li>
                    <li>${managerNumber}</li>
                </ul>
                </div>
                `;
            };
            sections.push(managerSection);
        }
        if (data.role === "Engineer"){
            const engineerSection = function (Engineer) {
                return `
                <div>
                <h3>Engineer</h3>
                <ul>
                    <li>${engineerName}</li>
                    <li>${engineerName}</li>
                    <li>${engineerName}</li>
                    <li>${engineerGithub}</li>
                </ul>
                </div>
                `;
            };
            sections.push(engineerSection);
        }
        if (data.role === "Intern"){
            const internSection = function (Intern) {
                return `
                <div>
                <h3>Intern</h3>
                <ul>
                    <li>${internName}</li>
                    <li>${internName}</li>
                    <li>${internName}</li>
                    <li>${internSchool}</li>
                </ul>
                </div>
                `;
            };
            sections.push(internSection);
        }
    }
    const personnelSections = sections.join('');
}

module.exports = HTMLpage;
