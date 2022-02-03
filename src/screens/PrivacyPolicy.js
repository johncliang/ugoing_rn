import React from "react";
import {
    // Image,
    // Text,
    // View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { GlobalStyles, GlobalColors } from "../styles/GlobalStyles";
import {
    View,
    Text,
    Image,
    Heading,
    Box,
    Center,
    Button,
    ScrollView,
    HStack,
    FlatList,
    Divider,
} from "native-base";

export const PrivacyPolicy = ({ navigation }) => {

    const Title = () => {
        return (
            <Box bg="white" px={"1.563rem"} pb={"1.563rem"}>
                <Center justifyContent={"flex-start"} flex="1">
                    <Heading textAlign={"center"} fontStyle={"bold"} fontSize={20} lineHeight={50} my={"1.563rem"}>
                        Privacy Policy
                    </Heading>
                </Center>
            </Box>
        );
    };

    const Content = () => {
        return (
            <Box fontFamily={"Gilroy"} color={"#6F7480"} mb={"10rem"} maxW={"60rem"} mx={"1.5rem"} alignItems="left">
                <div  >
                    <br />
                    <p dir="ltr">
                        Last updated February 01, 2022
                    </p>
                    <br />
                    <p dir="ltr">
                        Thank you for choosing to be part of our community at UGoing (<b>"Company,"
                            "we," "us," or "our"</b>). We are committed to protecting your personal
                        information and your right to privacy. If you have any questions or
                        concerns about this privacy notice or our practices with regard to your
                        personal information, please contact us at ugoingapp@gmail.com.
                    </p>
                    <br />
                    <p dir="ltr">
                        This privacy notice describes how we might use your information if you:
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Visit our website at            <a href="https://ugoing.us">https://ugoing.us</a>
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Engage with us in other related ways ― including any sales,
                                marketing, or events
                            </p>
                        </li>
                    </ul>
                    <p dir="ltr">
                        In this privacy notice, if we refer to:
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                "Website," we are referring to any website of ours that references
                                or links to this policy
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                "Services," we are referring to our Website, and other related
                                services, including any sales, marketing, or events
                            </p>
                        </li>
                    </ul>
                    <p dir="ltr">
                        The purpose of this privacy notice is to explain to you in the clearest way
                        possible what information we collect, how we use it, and what rights you
                        have in relation to it. If there are any terms in this privacy notice that
                        you do not agree with, please discontinue use of our Services immediately.
                    </p>
                    <br />
                    <p dir="ltr">
                        Please read this privacy notice carefully, as it will help you understand
                        what we do with the information that we collect.
                    </p>
                    <br />
                    <h2 dir="ltr">
                        <b>
                            1. WHAT INFORMATION DO WE COLLECT?
                        </b>
                    </h2>
                    <br />
                    <p dir="ltr">
                        Personal information you disclose to us
                    </p>
                    <br />
                    <p dir="ltr">
                        In Short: We collect personal information that you provide to us.
                    </p>
                    <br />
                    <p dir="ltr">
                        We collect personal information that you voluntarily provide to us when you
                        register on the Website, express an interest in obtaining information about
                        us or our products and Services, when you participate in activities on the
                        Website (such as by posting messages in our online forums or entering
                        competitions, contests or giveaways) or otherwise when you contact us.
                    </p>
                    <br />
                    <p dir="ltr">
                        The personal information that we collect depends on the context of your
                        interactions with us and the Website, the choices you make and the products
                        and features you use. The personal information we collect may include the
                        following:
                    </p>
                    <br />
                    <p dir="ltr">
                        Personal Information Provided by You. We collect phone numbers; email
                        addresses; usernames; passwords; and other similar information.
                    </p>
                    <br />
                    <p dir="ltr">
                        All personal information that you provide to us must be true, complete and
                        accurate, and you must notify us of any changes to such personal
                        information.
                    </p>
                    <br />
                    <h2 dir="ltr">
                        <b>
                            2. HOW DO WE USE YOUR INFORMATION?
                        </b>
                    </h2>
                    <br />
                    <p dir="ltr">
                        In Short: We process your information for purposes based on legitimate
                        business interests, the fulfillment of our contract with you, compliance
                        with our legal obligations, and/or your consent.
                    </p>
                    <br />
                    <p dir="ltr">
                        We use personal information collected via our Website for a variety of
                        business purposes described below. We process your personal information for
                        these purposes in reliance on our legitimate business interests, in order
                        to enter into or perform a contract with you, with your consent, and/or for
                        compliance with our legal obligations. We indicate the specific processing
                        grounds we rely on next to each purpose listed below.
                    </p>
                    <br />
                    <p dir="ltr">
                        We use the information we collect or receive:
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                To facilitate account creation and logon process. If you choose to
                                link your account with us to a third-party account (such as your
                                Google or Facebook account), we use the information you allowed us
                                to collect from those third parties to facilitate account creation
                                and logon process for the performance of the contract.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                To post testimonials. We post testimonials on our Website that may
                                contain personal information. Prior to posting a testimonial, we
                                will obtain your consent to use your name and the content of the
                                testimonial. If you wish to update, or delete your testimonial,
                                please contact us at ugoingapp@gmail.com and be sure to include
                                your name, testimonial location, and contact information.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Request feedback. We may use your information to request feedback
                                and to contact you about your use of our Website.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                To enable user-to-user communications. We may use your information
                                in order to enable user-to-user communications with each user's
                                consent.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                To manage user accounts. We may use your information for the
                                purposes of managing our account and keeping it in working order.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                To send administrative information to you. We may use your personal
                                information to send you product, service and new feature
                                information and/or information about changes to our terms,
                                conditions, and policies.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                To protect our Services. We may use your information as part of our
                                efforts to keep our Website safe and secure (for example, for fraud
                                monitoring and prevention).
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                To enforce our terms, conditions and policies for business
                                purposes, to comply with legal and regulatory requirements or in
                                connection with our contract.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                To respond to legal requests and prevent harm. If we receive a
                                subpoena or other legal request, we may need to inspect the data we
                                hold to determine how to respond.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Fulfill and manage your orders. We may use your information to
                                fulfill and manage your orders, payments, returns, and exchanges
                                made through the Website.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Administer prize draws and competitions. We may use your
                                information to administer prize draws and competitions when you
                                elect to participate in our competitions.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                To deliver and facilitate delivery of services to the user. We may
                                use your information to provide you with the requested service.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                To respond to user inquiries/offer support to users. We may use
                                your information to respond to your inquiries and solve any
                                potential issues you might have with the use of our Services.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                To send you marketing and promotional communications. We and/or our
                                third-party marketing partners may use the personal information you
                                send to us for our marketing purposes, if this is in accordance
                                with your marketing preferences. For example, when expressing an
                                interest in obtaining information about us or our Website,
                                subscribing to marketing or otherwise contacting us, we will
                                collect personal information from you. You can opt-out of our
                                marketing emails at any time (see the "
                                <a
                                    href="https://app.termly.io/dashboard/website/e0c97593-6a45-4dc3-a794-4e8102d00093/privacy-policy#privacyrights"
                                >
                                    WHAT ARE YOUR PRIVACY RIGHTS?
                                </a>
                                " below).
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Deliver targeted advertising to you. We may use your information to
                                develop and display personalized content and advertising (and work
                                with third parties who do so) tailored to your interests and/or
                                location and to measure its effectiveness.
                            </p>
                        </li>
                    </ul>
                    <br />
                    <h2 dir="ltr">
                        <b>
                            3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                        </b>
                    </h2>
                    <br />
                    <p dir="ltr">
                        In Short: We only share information with your consent, to comply with laws,
                        to provide you with services, to protect your rights, or to fulfill
                        business obligations.
                    </p>
                    <br />
                    <p dir="ltr">
                        We may process or share your data that we hold based on the following legal
                        basis:
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Consent: We may process your data if you have given us specific
                                consent to use your personal information for a specific purpose.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Legitimate Interests: We may process your data when it is
                                reasonably necessary to achieve our legitimate business interests.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Performance of a Contract: Where we have entered into a contract
                                with you, we may process your personal information to fulfill the
                                terms of our contract.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Legal Obligations: We may disclose your information where we are
                                legally required to do so in order to comply with applicable law,
                                governmental requests, a judicial proceeding, court order, or legal
                                process, such as in response to a court order or a subpoena
                                (including in response to public authorities to meet national
                                security or law enforcement requirements).
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Vital Interests: We may disclose your information where we believe
                                it is necessary to investigate, prevent, or take action regarding
                                potential violations of our policies, suspected fraud, situations
                                involving potential threats to the safety of any person and illegal
                                activities, or as evidence in litigation in which we are involved.
                            </p>
                        </li>
                    </ul>
                    <p dir="ltr">
                        More specifically, we may need to process your data or share your personal
                        information in the following situations:
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Business Transfers. We may share or transfer your information in
                                connection with, or during negotiations of, any merger, sale of
                                company assets, financing, or acquisition of all or a portion of
                                our business to another company.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Google Maps Platform APIs. We may share your information with
                                certain Google Maps Platform APIs (e.g., Google Maps API, Place
                                API). To find out more about Google’s Privacy Policy, please refer
                                to this <a href="https://policies.google.com/privacy">link</a>. We
                                obtain and store on your device ('cache') your location. You may
                                revoke your consent anytime by contacting us at the contact details
                                provided at the end of this document.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Vendors, Consultants and Other Third-Party Service Providers. We
                                may share your data with third-party vendors, service providers,
                                contractors or agents who perform services for us or on our behalf
                                and require access to such information to do that work. Examples
                                include: payment processing, data analysis, email delivery, hosting
                                services, customer service and marketing efforts. We may allow
                                selected third parties to use tracking technology on the Website,
                                which will enable them to collect data on our behalf about how you
                                interact with our Website over time. This information may be used
                                to, among other things, analyze and track data, determine the
                                popularity of certain content, pages or features, and better
                                understand online activity. Unless described in this notice, we do
                                not share, sell, rent or trade any of your information with third
                                parties for their promotional purposes.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Other Users. When you share personal information (for example, by
                                posting comments, contributions or other content to the Website) or
                                otherwise interact with public areas of the Website, such personal
                                information may be viewed by all users and may be publicly made
                                available outside the Website in perpetuity. Similarly, other users
                                will be able to view descriptions of your activity, communicate
                                with you within our Website, and view your profile.
                            </p>
                        </li>
                    </ul>
                    <br />
                    <h2 dir="ltr">
                        <b>
                            4. WHO WILL YOUR INFORMATION BE SHARED WITH?
                        </b>
                    </h2>
                    <br />
                    <p dir="ltr">
                        In Short: We only share information with the following categories of third
                        parties.
                    </p>
                    <br />
                    <p dir="ltr">
                        We only share and disclose your information with the following categories
                        of third parties. If we have processed your data based on your consent and
                        you wish to revoke your consent, please contact us using the contact
                        details provided in the section below titled "HOW CAN YOU CONTACT US ABOUT
                        THIS NOTICE?".
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Data Analytics Services
                            </p>
                        </li>
                    </ul>
                    <br />
                    <h2 dir="ltr">
                        <b>
                            5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                        </b>
                    </h2>
                    <br />
                    <p dir="ltr">
                        In Short: We may use cookies and other tracking technologies to collect and
                        store your information.
                    </p>
                    <br />
                    <p dir="ltr">
                        We may use cookies and similar tracking technologies (like web beacons and
                        pixels) to access or store information. Specific information about how we
                        use such technologies and how you can refuse certain cookies is set out in
                        our Cookie Notice.
                    </p>
                    <br />
                    <h2 dir="ltr">
                        <b>
                            6. HOW LONG DO WE KEEP YOUR INFORMATION?
                        </b>
                    </h2>
                    <br />
                    <p dir="ltr">
                        In Short: We keep your information for as long as necessary to fulfill the
                        purposes outlined in this privacy notice unless otherwise required by law.
                    </p>
                    <br />
                    <p dir="ltr">
                        We will only keep your personal information for as long as it is necessary
                        for the purposes set out in this privacy notice, unless a longer retention
                        period is required or permitted by law (such as tax, accounting or other
                        legal requirements). No purpose in this notice will require us keeping your
                        personal information for longer than twenty four (24) months past the
                        termination of the user's account.
                    </p>
                    <br />
                    <p dir="ltr">
                        When we have no ongoing legitimate business need to process your personal
                        information, we will either delete or anonymize such information, or, if
                        this is not possible (for example, because your personal information has
                        been stored in backup archives), then we will securely store your personal
                        information and isolate it from any further processing until deletion is
                        possible.
                    </p>
                    <br />
                    <h2 dir="ltr">
                        <b>
                            7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                        </b>
                    </h2>
                    <br />
                    <p dir="ltr">
                        In Short: We aim to protect your personal information through a system of
                        organizational and technical security measures.
                    </p>
                    <br />
                    <p dir="ltr">
                        We have implemented appropriate technical and organizational security
                        measures designed to protect the security of any personal information we
                        process. However, despite our safeguards and efforts to secure your
                        information, no electronic transmission over the Internet or information
                        storage technology can be guaranteed to be 100% secure, so we cannot
                        promise or guarantee that hackers, cybercriminals, or other unauthorized
                        third parties will not be able to defeat our security, and improperly
                        collect, access, steal, or modify your information. Although we will do our
                        best to protect your personal information, transmission of personal
                        information to and from our Website is at your own risk. You should only
                        access the Website within a secure environment.
                    </p>
                    <br />
                    <h2 dir="ltr">
                        <b>
                            8. DO WE COLLECT INFORMATION FROM MINORS?
                        </b>
                    </h2>
                    <br />
                    <p dir="ltr">
                        In Short: We do not knowingly collect data from or market to children under
                        18 years of age.
                    </p>
                    <br />
                    <p dir="ltr">
                        We do not knowingly solicit data from or market to children under 18 years
                        of age. By using the Website, you represent that you are at least 18 or
                        that you are the parent or guardian of such a minor and consent to such
                        minor dependent’s use of the Website. If we learn that personal information
                        from users less than 18 years of age has been collected, we will deactivate
                        the account and take reasonable measures to promptly delete such data from
                        our records. If you become aware of any data we may have collected from
                        children under age 18, please contact us at ugoingapp@gmail.com.
                    </p>
                    <br />
                    <h2 dir="ltr">
                        <b>
                            9. WHAT ARE YOUR PRIVACY RIGHTS?
                        </b>
                    </h2>
                    <br />
                    <p dir="ltr">
                        In Short: In some regions, such as the European Economic Area (EEA) and
                        United Kingdom (UK), you have rights that allow you greater access to and
                        control over your personal information. You may review, change, or
                        terminate your account at any time.
                    </p>
                    <br />
                    <p dir="ltr">
                        In some regions (like the EEA and UK), you have certain rights under
                        applicable data protection laws. These may include the right (i) to request
                        access and obtain a copy of your personal information, (ii) to request
                        rectification or erasure; (iii) to restrict the processing of your personal
                        information; and (iv) if applicable, to data portability. In certain
                        circumstances, you may also have the right to object to the processing of
                        your personal information. To make such a request, please use the contact
                        details provided below. We will consider and act upon any request in
                        accordance with applicable data protection laws.
                    </p>
                    <br />
                    <p dir="ltr">
                        If we are relying on your consent to process your personal information, you
                        have the right to withdraw your consent at any time. Please note however
                        that this will not affect the lawfulness of the processing before its
                        withdrawal, nor will it affect the processing of your personal information
                        conducted in reliance on lawful processing grounds other than consent.
                    </p>
                    <p dir="ltr">
                        If you are a resident in the EEA or UK and you believe we are unlawfully
                        processing your personal information, you also have the right to complain
                        to your local data protection supervisory authority. You can find their
                        contact details here:{' '}
                        <a
                            href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                        >
                            https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                        </a>
                        .
                    </p>
                    <br />
                    <p dir="ltr">
                        If you are a resident in Switzerland, the contact details for the data
                        protection authorities are available here:{' '}
                        <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">
                            https://www.edoeb.admin.ch/edoeb/en/home.html
                        </a>
                        .
                    </p>
                    <br />
                    <p dir="ltr">
                        If you have questions or comments about your privacy rights, you may email
                        us at ugoingapp@gmail.com.
                    </p>
                    <br />
                    <h3 dir="ltr">
                        <b>
                            Account Information
                        </b>
                    </h3>
                    <br />
                    <p dir="ltr">
                        If you would at any time like to review or change the information in your
                        account or terminate your account, you can:
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Log in to your account settings and update your user account.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Contact us using the contact information provided.
                            </p>
                        </li>
                    </ul>
                    <p dir="ltr">
                        Upon your request to terminate your account, we will deactivate or delete
                        your account and information from our active databases. However, we may
                        retain some information in our files to prevent fraud, troubleshoot
                        problems, assist with any investigations, enforce our Terms of Use and/or
                        comply with applicable legal requirements.
                    </p>
                    <br />
                    <p dir="ltr">
                        Cookies and similar technologies: Most Web browsers are set to accept
                        cookies by default. If you prefer, you can usually choose to set your
                        browser to remove cookies and to reject cookies. If you choose to remove
                        cookies or reject cookies, this could affect certain features or services
                        of our Website. To opt-out of interest-based advertising by advertisers on
                        our Website visit{' '}
                        <a href="http://www.aboutads.info/choices/">
                            http://www.aboutads.info/choices/
                        </a>
                        .
                    </p>
                    <br />
                    <p dir="ltr">
                        Opting out of email marketing: You can unsubscribe from our marketing email
                        list at any time by clicking on the unsubscribe link in the emails that we
                        send or by contacting us using the details provided below. You will then be
                        removed from the marketing email list — however, we may still communicate
                        with you, for example to send you service-related emails that are necessary
                        for the administration and use of your account, to respond to service
                        requests, or for other non-marketing purposes. To otherwise opt-out, you
                        may:
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Access your account settings and update your preferences.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Contact us using the contact information provided.
                            </p>
                        </li>
                    </ul>
                    <br />
                    <h2 dir="ltr">
                        <b>
                            10. CONTROLS FOR DO-NOT-TRACK FEATURES
                        </b>
                    </h2>
                    <br />
                    <p dir="ltr">
                        Most web browsers and some mobile operating systems and mobile applications
                        include a Do-Not-Track ("DNT") feature or setting you can activate to
                        signal your privacy preference not to have data about your online browsing
                        activities monitored and collected. At this stage no uniform technology
                        standard for recognizing and implementing DNT signals has been finalized.
                        As such, we do not currently respond to DNT browser signals or any other
                        mechanism that automatically communicates your choice not to be tracked
                        online. If a standard for online tracking is adopted that we must follow in
                        the future, we will inform you about that practice in a revised version of
                        this privacy notice.
                    </p>
                    <br />
                    <h2 dir="ltr">
                        <b>
                            11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                        </b>
                    </h2>
                    <br />
                    <p dir="ltr">
                        In Short: Yes, if you are a resident of California, you are granted
                        specific rights regarding access to your personal information.
                    </p>
                    <br />
                    <p dir="ltr">
                        California Civil Code Section 1798.83, also known as the "Shine The Light"
                        law, permits our users who are California residents to request and obtain
                        from us, once a year and free of charge, information about categories of
                        personal information (if any) we disclosed to third parties for direct
                        marketing purposes and the names and addresses of all third parties with
                        which we shared personal information in the immediately preceding calendar
                        year. If you are a California resident and would like to make such a
                        request, please submit your request in writing to us using the contact
                        information provided below.
                    </p>
                    <br />
                    <p dir="ltr">
                        If you are under 18 years of age, reside in California, and have a
                        registered account with the Website, you have the right to request removal
                        of unwanted data that you publicly post on the Website. To request removal
                        of such data, please contact us using the contact information provided
                        below, and include the email address associated with your account and a
                        statement that you reside in California. We will make sure the data is not
                        publicly displayed on the Website, but please be aware that the data may
                        not be completely or comprehensively removed from all our systems (e.g.
                        backups, etc.).
                    </p>
                    <br />
                    <h3 dir="ltr">
                        <b>
                            CCPA Privacy Notice
                        </b>
                    </h3>
                    <br />
                    <p dir="ltr">
                        The California Code of Regulations defines a "resident" as:
                    </p>
                    <br />
                    <p dir="ltr">
                        (1) every individual who is in the State of California for other than a
                        temporary or transitory purpose and
                    </p>
                    <p dir="ltr">
                        (2) every individual who is domiciled in the State of California who is
                        outside the State of California for a temporary or transitory purpose
                    </p>
                    <br />
                    <p dir="ltr">
                        All other individuals are defined as "non-residents."
                    </p>
                    <br />
                    <p dir="ltr">
                        If this definition of "resident" applies to you, we must adhere to certain
                        rights and obligations regarding your personal information.
                    </p>
                    <br />
                    <h3 dir="ltr">
                        What categories of personal information do we collect?
                    </h3>
                    <br />
                    <p dir="ltr">
                        We may collect other personal information outside of these categories
                        instances where you interact with us in-person, online, or by phone or mail
                        in the context of:
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Receiving help through our customer support channels;
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Participation in customer surveys or contests; and
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Facilitation in the delivery of our Services and to respond to your
                                inquiries.
                            </p>
                        </li>
                    </ul>
                    <h3 dir="ltr">
                        How do we use and share your personal information?
                    </h3>
                    <br />
                    <p dir="ltr">
                        UGoing collects and shares your personal information through:
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Beacons/Pixels/Tags
                            </p>
                        </li>
                    </ul>
                    <p dir="ltr">
                        More information about our data collection and sharing practices can be
                        found in this privacy notice.
                    </p>
                    <br />
                    <p dir="ltr">
                        You may contact us by email at ugoingapp@gmail.com, or by referring to the
                        contact details at the bottom of this document.
                    </p>
                    <br />
                    <p dir="ltr">
                        If you are using an authorized agent to exercise your right to opt-out we
                        may deny a request if the authorized agent does not submit proof that they
                        have been validly authorized to act on your behalf.
                    </p>
                    <br />
                    <h3 dir="ltr">
                        Will your information be shared with anyone else?
                    </h3>
                    <br />
                    <p dir="ltr">
                        We may disclose your personal information with our service providers
                        pursuant to a written contract between us and each service provider. Each
                        service provider is a for-profit entity that processes the information on
                        our behalf.
                    </p>
                    <br />
                    <p dir="ltr">
                        We may use your personal information for our own business purposes, such as
                        for undertaking internal research for technological development and
                        demonstration. This is not considered to be "selling" of your personal
                        data.
                    </p>
                    <br />
                    <p dir="ltr">
                        UGoing has disclosed the following categories of personal information to
                        third parties for a business or commercial purpose in the preceding twelve
                        (12) months:
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                Category B. Personal information, as defined in the California
                                Customer Records law, such as your name, contact information,
                                education, employment, employment history and financial
                                information.
                            </p>
                        </li>
                    </ul>
                    <p dir="ltr">
                        The categories of third parties to whom we disclosed personal information
                        for a business or commercial purpose can be found under "WHO WILL YOUR
                        INFORMATION BE SHARED WITH?".
                    </p>
                    <br />
                    <p dir="ltr">
                        UGoing has not sold any personal information to third parties for a
                        business or commercial purpose in the preceding twelve (12) months. UGoing
                        will not sell personal information in the future belonging to website
                        visitors, users and other consumers.
                    </p>
                    <br />
                    <h3 dir="ltr">
                        Your rights with respect to your personal data
                    </h3>
                    <br />
                    <p dir="ltr">
                        Right to request deletion of the data - Request to delete
                    </p>
                    <br />
                    <p dir="ltr">
                        You can ask for the deletion of your personal information. If you ask us to
                        delete your personal information, we will respect your request and delete
                        your personal information, subject to certain exceptions provided by law,
                        such as (but not limited to) the exercise by another consumer of his or her
                        right to free speech, our compliance requirements resulting from a legal
                        obligation or any processing that may be required to protect against
                        illegal activities.
                    </p>
                    <br />
                    <p dir="ltr">
                        Right to be informed - Request to know
                    </p>
                    <br />
                    <p dir="ltr">
                        Depending on the circumstances, you have a right to know:
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                whether we collect and use your personal information;
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                the categories of personal information that we collect;
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                the purposes for which the collected personal information is used;
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                whether we sell your personal information to third parties;
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                the categories of personal information that we sold or disclosed
                                for a business purpose;
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                the categories of third parties to whom the personal information
                                was sold or disclosed for a business purpose; and
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                the business or commercial purpose for collecting or selling
                                personal information.
                            </p>
                        </li>
                    </ul>
                    <p dir="ltr">
                        In accordance with applicable law, we are not obligated to provide or
                        delete consumer information that is de-identified in response to a consumer
                        request or to re-identify individual data to verify a consumer request.
                    </p>
                    <br />
                    <p dir="ltr">
                        Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights
                    </p>
                    <br />
                    <p dir="ltr">
                        We will not discriminate against you if you exercise your privacy rights.
                    </p>
                    <br />
                    <p dir="ltr">
                        Verification process
                    </p>
                    <br />
                    <p dir="ltr">
                        Upon receiving your request, we will need to verify your identity to
                        determine you are the same person about whom we have the information in our
                        system. These verification efforts require us to ask you to provide
                        information so that we can match it with information you have previously
                        provided us. For instance, depending on the type of request you submit, we
                        may ask you to provide certain information so that we can match the
                        information you provide with the information we already have on file, or we
                        may contact you through a communication method (e.g. phone or email) that
                        you have previously provided to us. We may also use other verification
                        methods as the circumstances dictate.
                    </p>
                    <br />
                    <p dir="ltr">
                        We will only use personal information provided in your request to verify
                        your identity or authority to make the request. To the extent possible, we
                        will avoid requesting additional information from you for the purposes of
                        verification. If, however, we cannot verify your identity from the
                        information already maintained by us, we may request that you provide
                        additional information for the purposes of verifying your identity, and for
                        security or fraud-prevention purposes. We will delete such additionally
                        provided information as soon as we finish verifying you.
                    </p>
                    <br />
                    <p dir="ltr">
                        Other privacy rights
                    </p>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                you may object to the processing of your personal data.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                you may request correction of your personal data if it is incorrect
                                or no longer relevant, or ask to restrict the processing of the
                                data.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                you can designate an authorized agent to make a request under the
                                CCPA on your behalf. We may deny a request from an authorized agent
                                that does not submit proof that they have been validly authorized
                                to act on your behalf in accordance with the CCPA.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li dir="ltr">
                            <p dir="ltr">
                                you may request to opt-out from future selling of your personal
                                information to third parties. Upon receiving a request to opt-out,
                                we will act upon the request as soon as feasibly possible, but no
                                later than 15 days from the date of the request submission.
                            </p>
                        </li>
                    </ul>
                    <p dir="ltr">
                        To exercise these rights, you can contact us by email at
                        ugoingapp@gmail.com, or by referring to the contact details at the bottom
                        of this document. If you have a complaint about how we handle your data, we
                        would like to hear from you.
                    </p>
                    <br />
                    <h2 dir="ltr">
                        <b>
                            12. DO WE MAKE UPDATES TO THIS NOTICE?
                        </b>
                    </h2>
                    <br />
                    <p dir="ltr">
                        In Short: Yes, we will update this notice as necessary to stay compliant
                        with relevant laws.
                    </p>
                    <br />
                    <p dir="ltr">
                        We may update this privacy notice from time to time. The updated version
                        will be indicated by an updated "Revised" date and the updated version will
                        be effective as soon as it is accessible. If we make material changes to
                        this privacy notice, we may notify you either by prominently posting a
                        notice of such changes or by directly sending you a notification. We
                        encourage you to review this privacy notice frequently to be informed of
                        how we are protecting your information.
                    </p>
                    <br />
                    <h2 dir="ltr">
                        <b>
                            13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                        </b>
                    </h2>
                    <br />
                    <p dir="ltr">
                        If you have questions or comments about this notice, you may email us at
                        ugoingapp@gmail.com
                    </p>
                    <br />
                    <h2 dir="ltr">
                        <b>
                            14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                        </b>
                    </h2>
                    <br />
                    <p dir="ltr">
                        Based on the applicable laws of your country, you may have the right to
                        request access to the personal information we collect from you, change that
                        information, or delete it in some circumstances. To request to review,
                        update, or delete your personal information, please submit a request form
                        by emailing us at ugoingapp@gmail.com.
                    </p>
                    <br />
                </div>
            </Box>
        )
    }

    const Footer = () => {
        return (
            <Box
                //h={Dimensions.get("window").height * 0.25}
                bg="primary.300"
                alignItems={"center"}
                justifyContent={"flex-start"}
            >
                <Text color="white" fontStyle={"semibold"} fontSize={12} letterSpacing={"0.02em"} my={"0.938rem"}>
                    UGoing™ 2022. All rights reserved.
                </Text>
            </Box>
        );
    };

    return (
        <View h="100%" overflowY={"scroll"} bg={"white"} justifyContent={"space-between"}>
            <Title />
            <Content></Content>
            <Footer />
        </View>
    )
};


const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        backgroundColor: "white"
    },
    textSection: {
        fontSize: 18,
        marginTop: 28,
        marginLeft: 20,
    }
});
