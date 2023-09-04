
import image from "../../assets/undraw_completed_tasks_vs6q.svg"


const SignIn = () => {


    return (

        <>

            <div>
                <div>
                    <div>
                    <div>
                        <div className="w-[150px]">
                            <img className="w-full" src={image} />
                        </div>

                        <div>Sign in</div>

                        <input type="text" placeholder="Input Email" />

                        <div>No Account? <span style={{color:"blue"}}>Create one!</span></div>

                        <div>Can't access your account?</div>

                        <div>
                            <button>Back</button>
                            <button>Next</button>
                        </div>
                    </div>
                    </div>

                    {/* <Bottom>
                        <Key>
                            <KeyLogo src="" />
                            <Option>Sign-in options</Option>
                        </Key>
                    </Bottom> */}
                </div>
            </div>

        </> 

    )
}

export default SignIn