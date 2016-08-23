import React from "react/lib/React";
import ReactPropTypes from "react/lib/ReactPropTypes";

const BuildInfoCard = (props) => (
    <div className="mdl-card mdl-shadow--8dp" style={{width: '100%'}}>
        <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Fix log level in spring boot application and move it</h2>
        </div>
        <div className="mdl-card__supporting-text">
            <div className="mdl-grid mdl-grid--no-spacing">
                <div className="mdl-cell">Duration: 3 min 59 sec</div>
                <div className="mdl-cell">Commit: <a href="">704dda3</a></div>
                <div className="mdl-cell">Branch: <a href="">master</a></div>
            </div>
            <div className="mdl-grid mdl-grid--no-spacing">
                <div className="mdl-cell">Finished: 7 days ago</div>
                <div className="mdl-cell">Compare: <a href="">421a5b1..704dda3</a></div>
                <div className="mdl-cell">Committed by: <a href="">Slam <i style={{fontSize: '14px'}}
                                                                           className="material-icons">account_circle</i></a>
                </div>
            </div>
            <div className="mdl-grid mdl-grid--no-spacing" style={{paddingTop: '16px'}}>
                <div style={{width: '100%'}} className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
            </div>
        </div>
        <div className="mdl-card__menu">
            <span className="mdl-chip"><span className="mdl-chip__text">#7</span></span>
        </div>
        <div className="mdl-card__actions mdl-card--border" style={{display: 'flex'}}>
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Restart build</a>
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Delete build</a>
            <div className="mdl-layout-spacer"></div>
            <button id="info_outline"
                    className="mdl-button mdl-button--icon mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                <i className="material-icons" style={{paddingRight: '10px'}}>info_outline</i>
            </button>
            <span className="mdl-tooltip mdl-tooltip--large" htmlFor="info_outline">Show build config</span>
            <button id="open_in_new"
                    className="mdl-button mdl-button--icon mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                <i className="material-icons" style={{paddingRight: '10px'}}>open_in_new</i>
            </button>
            <span className="mdl-tooltip mdl-tooltip--large" htmlFor="open_in_new">See raw logs</span>
            <button id="expand_less"
                    className="mdl-button mdl-button--icon mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                <i className="material-icons" style={{paddingRight: '10px'}}>expand_less</i>
            </button>
            <span className="mdl-tooltip mdl-tooltip--large" htmlFor="expand_less">Collapse</span>
        </div>
        <div style={{padding: '16px', fontSize: '12px'}} className="mdl-color--blue-grey mdl-color-text--white">
            <pre>
{`[0K$ java -Xmx32m -version
java version "1.8.0_31"
Java(TM) SE Runtime Environment (build 1.8.0_31-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.31-b07, mixed mode)
$ javac -J-Xmx32m -version
javac 1.8.0_31
travis_fold:start:before_install
[0Ktravis_time:start:058ccd46
[0K$ openssl aes-256-cbc -K $encrypted_c24445d8e8e5_key -iv $encrypted_c24445d8e8e5_iv -in slamdev-ec2.ppk.enc -out slamdev-ec2.ppk -d

travis_time:end:058ccd46:start=1471282166635070624,finish=1471282166644346564,duration=9275940
[0Ktravis_fold:end:before_install
[0Ktravis_fold:start:install
[0Ktravis_time:start:0d1f6dac
[0K$ ./gradlew assemble
:buildSrc:clean UP-TO-DATE
:buildSrc:compileJava UP-TO-DATE
:buildSrc:compileGroovy
:buildSrc:pluginDescriptors
:buildSrc:processResources
:buildSrc:classNamees
:buildSrc:jar
:buildSrc:assemble
:buildSrc:pluginUnderTestMetadata
:buildSrc:compileTestJava UP-TO-DATE
:buildSrc:compileTestGroovy UP-TO-DATE
:buildSrc:processTestResources UP-TO-DATE
:buildSrc:testclassNamees UP-TO-DATE
:buildSrc:test UP-TO-DATE
:buildSrc:check UP-TO-DATE
:buildSrc:build
:assemble UP-TO-DATE
:admin:compileJava
:admin:generateGitProperties
:admin:processResources
:admin:classNamees
:admin:findMainclassName
:admin:jar
:admin:bootRepackage
:admin:assemble
:client:compileJava
:client:processResources
:client:classNamees
:client:findMainclassName
:client:jar
:client:bootRepackage
:client:assemble
:service:compileJava
:service:generateGitProperties
:service:processResources
:service:classNamees
:service:findMainclassName
:service:jar
:service:bootRepackage
:service:assemble

BUILD SUCCESSFUL

Total time: 1 mins 5.087 secs

travis_time:end:0d1f6dac:start=1471282166648843577,finish=1471282232241164153,duration=65592320576
[0Ktravis_fold:end:install
[0Ktravis_time:start:19d144bc
[0K$ ./gradlew check
:buildSrc:compileJava UP-TO-DATE
:buildSrc:compileGroovy UP-TO-DATE
:buildSrc:pluginDescriptors UP-TO-DATE
:buildSrc:processResources UP-TO-DATE
:buildSrc:classNamees UP-TO-DATE
:buildSrc:jar UP-TO-DATE
:buildSrc:assemble UP-TO-DATE
:buildSrc:pluginUnderTestMetadata UP-TO-DATE
:buildSrc:compileTestJava UP-TO-DATE
:buildSrc:compileTestGroovy UP-TO-DATE
:buildSrc:processTestResources UP-TO-DATE
:buildSrc:testclassNamees UP-TO-DATE
:buildSrc:test UP-TO-DATE
:buildSrc:check UP-TO-DATE
:buildSrc:build UP-TO-DATE
:check UP-TO-DATE
:admin:compileJava UP-TO-DATE
:admin:generateGitProperties UP-TO-DATE
:admin:processResources UP-TO-DATE
:admin:classNamees UP-TO-DATE
:admin:compileTestJava UP-TO-DATE
:admin:processTestResources UP-TO-DATE
:admin:testclassNamees UP-TO-DATE
:admin:test UP-TO-DATE
:admin:check UP-TO-DATE
:client:compileJava UP-TO-DATE
:client:processResources UP-TO-DATE
:client:classNamees UP-TO-DATE
:client:checkstyleMain
:client:compileTestJava UP-TO-DATE
:client:processTestResources
:client:testclassNamees
:client:checkstyleTest UP-TO-DATE
:client:findbugsMain
:client:findbugsTest UP-TO-DATE
:client:test UP-TO-DATE
:client:jacocoTestReport SKIPPED
:client:pmdMain
:client:pmdTest UP-TO-DATE
:client:check
:service:compileJava UP-TO-DATE
:service:generateGitProperties UP-TO-DATE
:service:processResources UP-TO-DATE
:service:classNamees UP-TO-DATE
:service:compileTestJava
:service:processTestResources
:service:testclassNamees
:service:compileIntegrationTestJava
:service:processIntegrationTestResources
:service:integrationTestclassNamees
:service:checkstyleIntegrationTest
:service:checkstyleMain
:service:checkstyleTest
:service:findbugsIntegrationTest
:service:findbugsMain
:service:findbugsTest
:service:test
:service:integrationTest
2016-08-15 17:33:13.817  INFO 3486 --- [       Thread-5] o.s.w.c.s.GenericWebApplicationContext   : Closing org.springframework.web.context.support.GenericWebApplicationContext@59a7dda1: startup date [Mon Aug 15 17:33:02 UTC 2016]; root of context hierarchy
:service:jacocoTestReport
Checking coverage results: /home/travis/build/slamdev/catalog/service/build/reports/jacoco/test/jacocoTestReport.xml
Passed Code Coverage Checks
:service:pmdIntegrationTest
:service:pmdMain
:service:pmdTest
:service:check

BUILD SUCCESSFUL

Total time: 2 mins 52.137 secs
`}
            </pre>
        </div>
    </div>
);

BuildInfoCard.propTypes = {
    jobName: ReactPropTypes.string,
    buildStatus: ReactPropTypes.string,
    repoName: ReactPropTypes.string,
    currentUser: ReactPropTypes.string
};

export default BuildInfoCard;
