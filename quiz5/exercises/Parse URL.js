/**
 Research the query string

 1.What information does it contain?
 A query string is a group of keywords that send requests to the webserver.
 These requests are used to pass the information (parameters) from one page to another,
 and you can access this information in the receiving page.
 These requests specified by the values following the '?', which is used as a separator

 2.Give an example of what a query string is used for?
 A query string can be used to retrieve certain data from a web server e.g.
 https://example.com/pathto/page?name=carly,
 so it will look for the name carly

 */

/**
 *Name: Denise Mlaisa
 *class: SE2840 031
 */

const readline = require('readline');

const getUrl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

getUrl.question("Enter a URL ", (answer) => {

    //closing input stream
    getUrl.close();

    const url = require('url');
    const myUrl = url.parse(answer, true);
    console.log(myUrl);

    //search parameters using the query function
    const queryData = myUrl.query;
    console.log(queryData);

});

