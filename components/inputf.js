export const uploadIdeaForm = [
    {
        labelText:"Description",
        labelFor:"desc",
        id:"desc",
        name:"desc",
        type:"textarea",
        multiple:false,
        isRequired:true,
        placeholder:"Describe your idea...",
        className:" p-4 rounded-3xl min-w-full h-[300px] bg-white mt-2"
    },
    {
        labelText:"File",
        labelFor:"file",
        id:"file",
        name:"file",
        type:"file",
        multiple:true,
        isRequired:true,
        placeholder:"",
        className:"relative p-4 rounded-3xl min-w-full  bg-white mt-2"
    },
    


];

export const SignupFields=[
    {
        labelText:"First Name",
        labelFor:"fname",
        id:"fname",
        name:"fname",
        type:"text",
        autoComplete:"fname",
        isRequired:true,
        placeholder:"First Name"   
    },
    {
        labelText:"Last name",
        labelFor:"lname",
        id:"lname",
        name:"lname",
        type:"text",
        autoComplete:"lname",
        isRequired:true,
        placeholder:"Last Name"   
    },

    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Date of Birth",
        labelFor:"dob",
        id:"dob",
        name:"dob",
        type:"date",
        autoComplete:"dob",
        isRequired:true,
        placeholder:""   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    }
];


