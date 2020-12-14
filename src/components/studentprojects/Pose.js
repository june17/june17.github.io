import PoserHeaderImage from '../../img/sp/poserheader.png'

const Poser = () => (
   <div className='container-fluid '>
        <div className='row blacky projectCaseStudyHeader'>
            <div className='container projectHeaderLayout1'>
                <div className='row'>
                    <div className='col-md-6'>
                            <h2>Pose, a chrome extension</h2>
                            <p>Realtime Audio and Video Project</p>
                            <div>
                                <p className='metaParagraph'>Type: Student project</p>
                                <p className='metaParagraph'>Timeline: Dec 2020</p>
                                <p className='metaParagraph'>Role: Code, design</p>
                            </div>
                    </div>
                    <div className='col-md-6'>
                        <img src={PoserHeaderImage} width='100%'/>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-6">
                        <h4>Summary</h4>
                        <p>
                            The project aims to build a realtime sedentary time monitoring tool that would help the users to be mindful about the time they spend sitting in front of the computer and encourage them to take a break to perform physical activities.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h4>Stack</h4>
                        <p>
                            The project aims to build a realtime sedentary time monitoring tool that would help the users to be mindful about the time they spend sitting in front of the computer and encourage them to take a break to perform physical activities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='projectTextContent'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3> Background </h3>
                        <p>
                            Sedentary jobs have increased 83% since 1950, and physically active jobs now make up only about 25% of our workforce, which is 50% less than in 1950. Software profession, like any other knowledge job, is mostly tethered to a desk. The term “knowledge worker” was first coined by Peter Drucker in his book, ​The Landmarks of Tomorrow (​1959). Drucker defined knowledge workers as high-level workers who apply theoretical and analytical knowledge, acquired through formal training, to develop products and services. These classes of workers include software professionals. While sitting down all day may seem harmless, but it has much negative impact on our body. Sedentary behaviour is a type of behaviour characterized by an energy expenditure of ≤1.5 energy equivalents. The person might be sitting, reclining or lying down. Using a computer is a prevalent sedentary behaviour. In many cases, they have to sit at a desk for over eight hours a day. The human body is built to stand upright. An upright position is favourable for heart, cardiovascular system and bowel movement functions.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='col-md-10 offset-md-1'>
                    <div className='row'>
                        <div className='col-md-4 spPersona'>
                            <h4>Persona 1</h4>
                            <p>Bio: A talented graduate software developer with a strong academic background who recently joined a multinational software company. She spends about 8hours a day in the office. She takes two half-hour breaks in between, but other than she spends her entire day in front of her work station. As she is a new joiner, she has to spend some extra time to learn more about her new role and responsibilities. She is not bothered about her sedentary lifestyle and is unaware about future consequences.</p>
                        </div>
                        <div className='col-md-4 spPersona'>
                            <h4>Persona 2</h4>
                            <p>Bio: A talented graduate software developer with a strong academic background who recently joined a multinational software company. She spends about 8hours a day in the office. She takes two half-hour breaks in between, but other than she spends her entire day in front of her work station. As she is a new joiner, she has to spend some extra time to learn more about her new role and responsibilities. She is not bothered about her sedentary lifestyle and is unaware about future consequences.</p>
                        </div>
                        <div className='col-md-4 spPersona'>
                            <h4>Persona 3</h4>
                            <p>Bio: A talented graduate software developer with a strong academic background who recently joined a multinational software company. She spends about 8hours a day in the office. She takes two half-hour breaks in between, but other than she spends her entire day in front of her work station. As she is a new joiner, she has to spend some extra time to learn more about her new role and responsibilities. She is not bothered about her sedentary lifestyle and is unaware about future consequences.</p>
                        </div> 
                    </div> 
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3> Methodology </h3>
                        <p>
                        Technology has indeed contributed to less physical activity. However, with this paper, we are exploring the possibility of using technology to monitor sedentary behaviour and promote physical activities in software professionals while they are at work. The proposed system would track the user using their webcam, and if the user is sitting idle for a certain amount of time, it will lock the computer. For the user to unlock the computer, he will have to perform some physical exercises which will be tracked in real time. The poses of the physical activities will be tracked using the webcam and will be examined using machine learning techniques of image classification and regression. The user will be given real time audio and video feedback on the screen for the physical activities he performs.
    For the initial proof of concept, the prototype will be browser-based. If the user spends long hours browsing websites, the browser will be locked. The user will then be asked to get up and do some physical exercises. Once they complete the exercises, the browser will be unlocked. We can use gamification techniques to reward the user for their progress, which will keep them motivated. This will also help them to feel good about their hard work.
                        </p>
                        <h4>Recommended desk-friendly exercises by experts</h4>
                        <p>There are various studies conducted to come up with a practical way to reduce the prevalence of sedentary behaviour pain among office workers. Some of the exercises recommended by the experts include:</p>
                        <h4>Tracking poses</h4>
                        <p>For the system to work, it should be able to recommend new exercises to the users and track their activity. Machine learning will help the computer systems to act without being explicitly programmed and with very minimal human intervention. This process has become pervasive in almost all new software systems that we probably use dozens of times a day without knowing it. Tracking the user's poses can be done by getting the images of the user's pose using the webcam and applying mathematical calculations to it for processing the image. This process is called Data mining. During this process, we can find anomalies, patterns and correlations within the different image data sets to predict outcomes. With each new data point, the system will learn from it and become better.
    Image recognition is a common use case of machine learning. Many other computer vision challenges such as object detection and segmentation can be reduced to image classification. We fit everything that we see into categories based on characteristics, or features, that they possess. Image classification is the process of classifying an image from a fixed set of categories. In our case, the categories will be different poses. Different pose labels will be assigned to the image. Initially, we will have to determine a set of poses into which we can classify the different user poses captured by the webcam, and the set of characteristics of each pose and use that to make those classifications. Thus image classification can be described as a two step process. Getting the image is the first step and then comparing it. This allows us to classify the images captured into one of the poses or perhaps say that it belongs to none of the poses. The process of classification allows us not only to recognize poses that we have seen before but also to get data about new poses that we have never seen.
    The machines interpret an image just as a matrix of bytes that represent pixel values. Image is flattened into one long array of bytes. The value of each byte is between 0 and 255 (byte range). Each byte in an image is a pixel value. For each pixel in a colour image, there are up to 4 pieces of information encoded in it, i.e., red, green, blue colour values and the opacity. If the red value is 255, that means it is going to be as red as it can be. Similarly, if the green value is 255, that means it is going to be as green as it can be. A combination of these colour values will produce a different colour. A machine learning algorithm looks for patterns of pixel values that it has seen before and connects them with the same outputs from an image in a specific category. For instance, if the adjacent pixels have high green and brown values, it might be an image of a tree. However, this can not be true in the real case scenarios, as there are many images where adjacent green and brown values do not correspond to a tree. So a complex calculation and algorithm are required for this pattern matching. It would be not easy to code the pattern matching algorithm from the ground up. So for this project, we use an end-to-end open source platform for machine learning, called TensorFlow [12] created by the Google Brain Team in 2015. It is based on dataflow and differentiable programming. It provides an abstract framework of algorithms so that the developer can focus on the overall logic of the application.</p>
                
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3> Use case </h3>
                        <h4>Assumptions</h4>
                        <p>User has a good command on how to use a computer. The user will have our chrome extension installed in their Chrome browser.
                        </p>
                        <h4>How it works​</h4>
                        <p>
                            From the moment the user starts using the chrome browser, his usage time is tracked. Warning sounds will be generated if their idle time is nearing the recommended usage time. If he is continuously using it above the recommended usage time, an overlay screen will appear over the tab he is browsing on, which will block him from using it any further and a feedback audio will be played. If he wants to unlock the browser, he will have to perform the physical exercises that appear on the screen. When he starts performing the physical activity, the webcam will start tracking his movements. If he completes the activity, the overlay will go away, and he can continue using the browser. The audio-visual feedback in the form of a progress indicator and other animations will be given to the user while he performs the physical exercises.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3>Low fidelity prototype</h3>
                        <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/ipad.png?alt=media&token=65714925-6aa5-4e6d-a8ee-a404531a17c8'} alt='low fidelity prototype image' width='80%' style={{ 'marginBottom': '5rem'}} />
                    </div>
                </div>
            </div>
            <div className='row blacky padding8v'>
                <div className='col-md-8 offset-md-2'>
                    <h3 style={{'color': 'white', 'margin-top': '0'}}>UI Design</h3>
                    <video width="100%" autoPlay loop >
                        <source src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/macbook.mp4?alt=media&token=40f0d458-7a7a-49f7-9e6a-82c197a76b18'} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3>Questions to investigate</h3>
                        <h4>Privacy</h4>
                        <p>The system is designed in such a way that the user is tracked using their webcam for idle time. This tracking might raise privacy issues, so we might have to tweak the system based on responses from the users. One possible workaround is not to track the user using the webcam but track their cursor movement. If the cursor has been active continuously for a long time, it means he is actively using the computer. This question has to be validated with the users once the prototype is ready.</p>
                        <h4>Workplace Etiquette</h4>
                        <p>Performing intense workouts in the office may not be appropriate. We might have to investigate exercises that are not too attention-seeking and will not distract their colleagues. We need to do more research to validate our hypothesis and find office-friendly workouts.</p>
                        <h4>Meaningful Gamification</h4>
                        <p>Our proposed system will have gamification concepts built into it. We will have to explore more ways into making it more meaningful. For instance, can the users redeem the points earned in our system to real rewards? Is it possible to have synchronous workout breaks? We need to investigate more on how gamification can be used to create a healthy work environment.</p>
                    </div>
                </div>

                 <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3>Conclusion</h3>
                        <p>The sedentary lifestyle among software professionals and other knowledge workers has several negative impacts on their health which need to be addressed. We use machine learning and use-centred design techniques to monitor sedentary behaviour among software professionals and motivate them to have an active lifestyle. With this paper, we aim to create a prototype which can be further used to study user behaviour and come up with unique solutions to the problem.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
)
export default Poser