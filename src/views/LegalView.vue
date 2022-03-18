<script>
import { legalData } from '@/stores/data.js';

export default {
    data(){
        return {
            legalData: legalData,
        };
    },
}
</script>

<template>
<div class="container container--content">
    <div class="legal-disclosure" id="legalWrapper">
        <h1>Impressum - Legal Disclosure</h1>

        <div class="legal-disclosure__content">
            <div class="personal-info">
                <p v-html="legalData.personalInfo"></p>
            </div>

            <div class="contact-info">
                <h2>{{ legalData.contactInfo.heading }}</h2>
                <p>
                    E-Mail: <a class="hover-underline" :href="'mailto:' + legalData.contactInfo.email">
                        {{ legalData.contactInfo.email }}
                    </a>
                </p>
            </div>

            <div class="in-charge">
                <h2>{{ legalData.inCharge.heading }}</h2>
                    <p v-for="(contact, index) in legalData.inCharge.contacts" :key="index" v-html="contact"></p>
            </div>
            <div class="liability-content">
                <h2>{{ legalData.liability.content.heading }}</h2>
                <p>{{ legalData.liability.content.copy }}</p>
            </div>

            <div class="liability-links">
                <h2>{{ legalData.liability.links.heading }}</h2>
                <p>{{ legalData.liability.links.copy }}</p>
            </div>

            <div class="copyright">
                <h2>{{ legalData.copyright.heading }}</h2>
                <p>{{ legalData.copyright.copy }}</p>
            </div>

            <p class="legal-disclosure__source" v-html="legalData.source"></p>
        </div>
    </div>
</div>
</template>
