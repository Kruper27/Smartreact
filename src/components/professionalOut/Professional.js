import React, {Component} from 'react'
import Title from "../ImportantStyles/Title/Title";
import TitleH2 from "../ImportantStyles/Title/TitleH2";
import TitleP from "../ImportantStyles/Title/TitleP";
import ProfOut from "./stylesForProf/ProfOut";
import ProfContent from "./stylesForProf/ProfContent";
import ContentP from "./stylesForProf/ContentP";
import ContentSpan from "./stylesForProf/ContentSpan";


export default class Professional extends Component {
    render() {
        return (
            <ProfOut>
                <Title>
                    <TitleH2><b> Professional Outsource Website Development Company </b></TitleH2>
                    <TitleP>Enjoy the work with the high-quality experts in web development</TitleP>
                </Title>
                <ProfContent>
                    <ContentP><ContentSpan> SmartExe </ContentSpan> software and web development company have 14 years'
                        experience behind, we`ve performed
                        various projects, from simple personal one web page site to eCommerce website design &
                        development. We create a website from scratch and provide full-cycle project support.
                    </ContentP>
                </ProfContent>
            </ProfOut>
        )
    }
}

