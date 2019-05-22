import React, { Component } from 'react'

class Home extends Component {
    render(){
        return(
<div>
    <h1>Welcome to Reflections!</h1>
    <div className="homeContainer">
    <main>
        <article>
    <h2>Life Questions</h2>
    <p>This section of Reflections tracks your personal growth 
        through the "Life Questions" page. Here you can map your 
        questions about life. This may help you decide what is 
        important to you to curate your lifestyle. Feature coming soon: 
        you will be able to come up with different possibilities/answers
        for each question.</p></article>
    <article>
    <h2>Life Perspectives</h2>
    <p>This section of Reflections tracks your personal growth 
        through the "Life Perspectives" page. When you notice a 
        change in your mindset, or some healing, you can record
        it in the "Perspectives" and "Old Perspectives" fields.

    </p></article></main>
    <aside>
    <h3>Food For Thought</h3>
    <p>Through the power of your own thoughts you can create the life you want.
        Your thoughts are powerful beyond measure. Reflect with us so that 
        others may bask in your glory.

    </p>
    </aside>
    </div>
</div>
        )
    }
}
export default Home;
