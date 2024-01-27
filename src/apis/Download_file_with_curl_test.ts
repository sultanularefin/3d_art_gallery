import {
    NextFunction,
    Request,
    Response
} from 'express';

// const Download_file_with_curl_test;
import {exec} from 'child_process';

// const upload_store_items_10_PutObject = async (req: typeof Request, res: typeof Response,/*next:typeof NextFunction*/) => {
// const Download_file_with_curl_test = async (req: Request, res: Response,/*next:typeof NextFunction*/) => {
export const domain_Checker_Regex2= /^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-\.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?/;
export const pdf_checker_Regex = /^.+\.([pP][dD][fF])/;
const Download_file_with_curl_test = async (req: Request, res: Response, next: NextFunction) => {


    console.log("Request: ", Request);

    const url_link = req.body.link;

    console.log("url_link: ",url_link);


    let good_link= false;
    let is_pdf_file= false;
    if (domain_Checker_Regex2.test(url_link) === false) {


    }
    else{
        good_link = true;
    }


    if (domain_Checker_Regex2.test(url_link) === false) {


    }
    else{
        is_pdf_file = true;
    }


    const all_good= ((is_pdf_file)&&(good_link));

    if(all_good){

        const command ='curl --location --request POST "https://testdocs11.s3.us-east-2.amazonaws.com/27486932.pdf"';
        // curl --location --request POST 'https://testdocs11.s3.us-east-2.amazonaws.com/27486932.pdf'




        /*   const command =
               'curl -s -w "\n\n%{json}" "https://httpbin.org/json"'*/

        exec(command, { encoding: 'utf-8' }, (error, stdout, stderr) => {
            if (error !== null) {
                console.log('Error', error, stderr)

                return
            }

            const [responseMetadata, response] = stdout.split('\n\n')

            console.log('Metadata', JSON.parse(responseMetadata))
            console.log('Response', JSON.parse(response))
        })


        return  res.json(
            {
                is_pdf_file: is_pdf_file,
                link: url_link,
                success: ((is_pdf_file)&&(good_link)),
                good_link: good_link,
                curl_status: "curl request processing",
            }
        )
    }






   else{


        return res.json(
            {
                is_pdf_file: is_pdf_file,
                link: url_link,
                success: ((is_pdf_file)&&(good_link)),
                good_link: good_link,
                curl_status: "curl request not sent",
            }
        )
    }


};

// module.exports = {update_item_image}

export default Download_file_with_curl_test;
