const mockJobs = [1, 2, 3]

export default function JobPreview() {
    return (
        <section className="section  job-preview">
            <div className="container">
                {mockJobs.map((id) => (
                    <article key={id} className="job-card">
                        <div className="job-avatar"/>
                        <div className="job-main">
                            <header className="job-header">
                                <h3 className="job-title">Creative Graphic Designer for Motion Graphics Project
                                    /*Job Title {id}*/
                                </h3>                               
                            </header>
                            <p className="job-description">
                                Hi, I&apos;m looking for graphic designer with expertise in motion graphics to bring
                                innovative ideas to life. I need for making simple project that running on my social
                                media...
                            </p>
                            <div className="job-tags">
                                <span>Graphic Design</span>
                                <span>Adobe Illustrator</span>
                                <span>Adobe Photoshop</span>
                            </div>
                        </div>
                        <div className="job-toggle">⌄</div>
                    </article>
                       
                ))}
            </div>
        </section>
    )
}