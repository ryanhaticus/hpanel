// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import cancelpendingsslcertificate from './cancelpendingsslcertificate';
import createshoppingcart from './createshoppingcart';
import getallproducts from './getallproducts';
import getcertificatestatusdetails from './getcertificatestatusdetails';
import getloginurl from './getloginurl';
import getpendingsslcertificates from './getpendingsslcertificates';
import getproviderslist from './getproviderslist';
import getproviderspecificdcvconstraints from './getproviderspecificdcvconstraints';
import getsslcertificateifavailable from './getsslcertificateifavailable';
import processsslpendingqueue from './processsslpendingqueue';
import requestsslcertificates from './requestsslcertificates';
import setstatusofpendingqueueitems from './setstatusofpendingqueueitems';
import seturlaftercheckout from './seturlaftercheckout';
import validatelogintoken from './validatelogintoken';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'Market',
        functionEP: ep
      });
    };
    
    export { cancelpendingsslcertificate, createshoppingcart, getallproducts, getcertificatestatusdetails, getloginurl, getpendingsslcertificates, getproviderslist, getproviderspecificdcvconstraints, getsslcertificateifavailable, processsslpendingqueue, requestsslcertificates, setstatusofpendingqueueitems, seturlaftercheckout, validatelogintoken,  };