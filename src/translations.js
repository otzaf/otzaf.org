import React from 'react'
import { Link } from 'react-router-dom'

import { FormattedMessage } from "react-intl";

// common links.
const github_link = <a href='https://github.com/otzaf/'>GitHub</a>

const trans = {
    home: {
        heading: <FormattedMessage id='welcome' defaultMessage="Who are we?"/>,
        welcome: <FormattedMessage id='welcome' defaultMessage="Hello, World! We're Otzaf!"/>,
        mission: <FormattedMessage id='mission' defaultMessage="Otzaf is an engineering company with the mission of providing elegant solutions that are privacy first - we don't depend on abusing your trust for profit."/>,
        goal1: <FormattedMessage id='goal1' defaultMessage="Otzaf is a young company with ambitious goals - there are many problems that we are yet to tackle. Right now we're in the phase of bootstrapping Otzaf."/>,
        learn_more: <FormattedMessage id='learn_more' defaultMessage="Join us on our journey. Learn more about {link}." values={{link: <Link to='/about'>what we're planning</Link>}}/>,
    },
    about: {
        about: <FormattedMessage id='about' defaultMessage="About Otzaf"/>, 
        tagline: <FormattedMessage id='tagline' defaultMessage="Otzaf is an Engineering company based in Brighton, UK. Our mission is to provide a variety of elegant, privacy-centric software solutions."/>,
        vision: <FormattedMessage id='vision' defaultMessage="Vision"/>,
        vision_msg: <FormattedMessage id='vision_msg' defaultMessage="We want to provide a suite of polished software(-as-a-service) solutions that don't misuse your personal information."/>,
        direction: <FormattedMessage id='direction' defaultMessage="Where we're headed"/>,
        direction_msg_1: <FormattedMessage id='direction_msg_1' defaultMessage="Particular problems we're interested in tackling are: search, file storage, planning &amp; organisation, emails, and much more!"/>,
        direction_msg_2: <FormattedMessage id='direction_msg_1' defaultMessage="The services that we offer will cost a small fee every month to keep the lights on. We want to provide services worth paying for - where you aren't the product."/>,
        transparency: <FormattedMessage id='transparency' defaultMessage="Transparency"/>,
        transparency_msg_1: <FormattedMessage id='transparency_msg_1' defaultMessage="Most of our work is done in the public eye and can be contributed to by anyone. We try to keep things open when we can. In the future our roadmap will be publicly available."/>,
        transparency_msg_2: <FormattedMessage id='transparency_msg_2' defaultMessage="In the mean time you can check out our {github_link} page where we keep some of our projects." values={{github_link}}/>,
        transparency_msg_3: <FormattedMessage id='transparency_msg_3' defaultMessage="Additionally, we have some open source projects on our hosted instance of Gitea. If we open source something, it will usually be open sourced internally on Gitea first before making it's way to GitHub."/>,
    },
    footer: {
        copyright: <FormattedMessage id='copyright' defaultMessage="Copyright &copy; Otzaf, 2019. All rights reserved."/>,
        follow_us: <FormattedMessage id='follow_us' defaultMessage="Follow Us"/>,
        resources: <FormattedMessage id='resources' defaultMessage="Resources"/>,
        developers: <FormattedMessage id='developers' defaultMessage="Developers"/>,
        company: <FormattedMessage id='company' defaultMessage="Company"/>,
        about: <FormattedMessage id='about' defaultMessage="About"/>,
        contact: <FormattedMessage id='contact' defaultMessage="Contact"/>,
        github: <FormattedMessage id='github' defaultMessage="GitHub"/>,
        twitter: <FormattedMessage id='twitter' defaultMessage="Twitter"/>,
        linkedin: <FormattedMessage id='linkedin' defaultMessage="LinkedIn"/>,
        tac: <FormattedMessage id='tac' defaultMessage="Terms &amp; Conditions"/>,
        privacy: <FormattedMessage id='privacy' defaultMessage="Privacy Policy"/>,
        contributing: <FormattedMessage id='contributing' defaultMessage="Contributing"/>,
        rfc_msg: <FormattedMessage id='rfc_msg' defaultMessage="This website itself is open source. Requests for change can be made on the {github_link} page." values={{github_link}}/>,
        open_source_msg: <FormattedMessage id='open_source_msg' defaultMessage="All of the open source projects we have can be found on GitHub — any contributions are welcome."/>,
    },
    header: {
        otzaf: <FormattedMessage id='otzaf' defaultMessage="otzaf"/>,
        home: <FormattedMessage id='home' defaultMessage="Home"/>,
        source_code: <FormattedMessage id='source_code' defaultMessage="Source Code"/>,
        about: <FormattedMessage id='about' defaultMessage="About"/>
    }
}

export const translate = (section, key) => trans[section][key]

export default trans