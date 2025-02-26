import commonAPI from "./commonApi";
import SERVER_URL from "./server_url";

// register
export const registerAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)

}
//login
export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)

}

//addproject
export const addProjectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)

}

//get home projects
export const homeProjectAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/get-home-projects`,"")

}

//get all projects
export const allProjectAPI=async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/get-all-projects?search=${searchKey}`,"",reqHeader)

}

//get user projects
export const userProjectAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/get-user-projects`,"",reqHeader)

}

//update project
export const updateProjectAPI=async(pid,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit/project/${pid}`,reqBody,reqHeader)

}

//delete project
export const deleteProjectAPI=async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/remove/project/${id}`,{},reqHeader)

}

//update user profile
export const updateUserProfileAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit/profile`,reqBody,reqHeader)

}


