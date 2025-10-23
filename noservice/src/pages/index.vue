<template>
  <v-container id="maincontent" class="fluid">
  <h2>This service is unavailable due to a server outage at The Evergreen State College</h2>
  <p>The service you are attempting to access requires hosting to function. The Evergreen State College has declined to provide any solution to this requirement, which means this system is currently unusable. Once the college solves this issue service will be restored.</p>
  <v-row v-masonry class="my-8">
    <v-col cols=12 sm=6 md=4>
      <h3>Why did this happen?</h3>
      <p>In 2024 a group of students organized a Student Originated Study to integrate the Organic Farm with student-developed data collection software. This would enable agricultural students to earn upper-division credit, while also developing useful free software for farmers.</p>
      <p>Since the project started, all the software has been hosted free-of-charge by a solitary student, using their own personal resources. As the project expanded in scope this created an increased burden on that single individual. As of now the administration has refused any effort to host a server of their own, and has stated they are no longer seeking input from students.</p>
      <p>Without a server this project cannot continue. Service has been suspended until this can be resolved.</p>
    </v-col>
    <v-col cols=12 sm=6 md=4>
      <h3>How can service be restored?</h3>
      <p>There's a innumerable number of potential configurations, but they all fall into essentially two categories: on-site or in the cloud.</p>
      <h4>On-Campus Development Server</h4>
      <p>By locating the server on campus there's immediate cost savings as well as recurring monthly cost savings. We already have plenty of hardware to build a viable system, all we need is permission. With a marginal investment we could buy a full rack of surplus servers if we wanted. On the other hand, on-premises systems require physical security and occasional maintenance.</p>
      <h4>Ethical Cloud Server</h4>
      <p>By locating the server in the cloud we could benefit from guaranteed uptime and availability, as well as removing any hardware considerations from the equation. Ethical hosting solutions use renewable energy to power the server and waste no water in cooling it. The downside is that powerful servers can be expensive to rent, and affordable servers often come with limitations on compute and memory.</p>
    </v-col>
    <v-col cols=12 sm=6 md=4>
      <h3>How much will it cost?</h3>
      <p>Very little.</p>
      <p>At the low end it would cost between literally nothing and $17/month. At the high end it could be as much as $250/month or a substantial investment in hardware. Either way it's a necessary requirement for the continuation of the Systems of Data project, and it would be a massive boon to CompSci students as well as any other students who could make use of it.</p>
      <h4>All it costs is the will to make it happen.</h4>
      <v-btn color="primary" class="rounded-xl mt-4" @click="petition = true">Sign the petition</v-btn>
    </v-col>
  </v-row>
  <v-row class="my-8">
    <v-col cols=12 sm=6>
      <h2>Why does Evergreen need a server?</h2>
      <p>To host services like this one. For projects such as the Systems of Data &amp; The Organic Farm a server is essential.</p>
      <h3>Requirements</h3>
      <p>The computer science department needs a server to manage, store, and process data, and to provide services to other computers. It needs a minimum of two CPU cores at 1Ghz or faster (AMD64, ARM64, or RISC-V architecture), 2GB of memory, and 8GB of storage. Of course additional power and memory would be wonderful, and could enable much more robust services, but that's the bare minimum needed to restore service.</p>
      <h3>Additional benefits of a server</h3>
      <p></p>
      <h3>Limitations of Codespaces</h3>
      <p>In leue</p>
      <a href="problems-with-microsoft" @click.prevent="microsoft = true">problems with Microsoft</a>
    </v-col>
    <v-col cols=12 sm=6>
      <h2>How can I help?</h2>
      <h3>Faculty</h3>
      <p>If this issue concerns you please reach out to other faculty and/or contacts in the IT department. Since input from students is being discouraged, you may be our only hope at finding a realistic path forwards.</p>
      <h3>Students</h3>
      <p>The administration has said they are not seeking student input on this situation, but it's still a good idea to try. Talk to your professors, <a href="sign-petition" @click.prevent="petition = true">sign the petition</a>, discuss the situation with other students, share this page.</p>
      <h3>Press</h3>
      <p>Getting the word out about this situation is vital to its timely resolution. If you have any sort of platform or audience, the students of Evergreen would appreciate your assistance in covering it.</p>
    </v-col>
  </v-row>
  <h2>Documents and Resources</h2>
  <ul>
    <li><a href="/Petition for On-Campus Development Server.pdf">Student petition for an on-campus development server</a></li>
    <li><a href="/Cloud Provider Comparison.pdf">Comparison of cloud hosting providers</a></li>
    <li><a href="sign-petition" @click.prevent="petition = true">Online petition form</a></li>
  </ul>
  <p class="mt-8">Contact <a href="mailto:shawn.bird@evergreen.edu">shawn.bird@evergreen.edu</a> with questions or comments regarding this site and the ongoing server situation.</p>
  <v-dialog v-model="petition" max-width="600">
    <v-card title="Sign The Petition" class="rounded-xl">
      <v-container>
        <v-expansion-panels class="mb-8">
          <v-expansion-panel value="petition">
            <v-expansion-panel-title>
              We, the students of The Evergreen State College, are petitioning for permission to set up an on-campus development server.
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p>Such a server would provide a local environment for coding, testing, cyber security scenarios, and web publishing. This would enhance the learning potential of students while reducing our reliance on costly Microsoft services.</p>
              <p>We formally request that The Evergreen State College allocate resources to house, connect, and power an on-campus development server. This server should:</p>
              <ul>
                <li>Be accessible to students through a variety of protocols (e.g. SSH, SFTP, VNC, HTTPS, etc.)</li>
                <li>Provide sufficient computational resources (CPU, RAM, storage) to support a variety of virtualization</li>
and development tasks.
                <li>Be capable of hosting student projects and websites.</li>
              </ul>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <PetitionForm/>
      </v-container>
    </v-card>
  </v-dialog>
  <v-dialog v-model="microsoft" max-width="600">
    <v-card title="Problems With Microsoft" class="rounded-xl">
      <v-container>
        <MicrosoftSins />
      </v-container>
    </v-card>
  </v-dialog>
  </v-container>
</template>

<script lang="ts" setup>
const petition = ref(false);
const microsoft = ref(false);
</script>
