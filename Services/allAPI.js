import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";

// register api
export const registerAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

// login api
export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

// add property
export const addPropertyAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add`,reqBody,reqHeader)
 }
//  get all property

export const getAllPropertyAPI=async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/property/?search=${searchKey}`,"",reqHeader)
}

//  get user property

export const getUserPropertyAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/my-listing`,"",reqHeader)
}

// id 
// export const getAllPropertyIdAPI = async (reqHeader) => {
//     return await commonAPI('GET', `${SERVER_URL}/view`, '', reqHeader);
//   };

// comment api
export const contactAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/contact`,reqBody,reqHeader)
}
// get comments

export const getAllCommentsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/admin`,"",reqHeader)
}

 
// remove project 


export const removeCommentAPI = async(cid,reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_URL}/admin/${cid}`, {}, reqHeader);
  }


//   edit property

export const editPropertyAPI = async (propertyId, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/edit-property/${propertyId}`, reqBody, reqHeader);
  }
  
//   remove property


export const removePropertyAPI = async(propertyId,reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_URL}/remove-property/${propertyId}`, {}, reqHeader);
  }