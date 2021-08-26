import React from "react"

import IntroduceComponent from "@src/components/Introduce.component"

import "@src/styles/pages/App.modules.scss"

function App() {
    return (
        <main className="wrap">
            <section>
                <IntroduceComponent />
            </section>
            <section>
                <h2>Section two</h2>
            </section>
            <section>
                <h2>Section three</h2>
            </section>
        </main>
    )
}

export default App
