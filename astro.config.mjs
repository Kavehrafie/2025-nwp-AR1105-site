// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://25ar1105.kavehrafie.com",
  integrations: [
    starlight({
      title: "AR1105: Intro to Global Art I",
      // social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      sidebar: [
        {
        	label: 'Syllabus',
        	items: [
        		// Each item here is one entry in the navigation menu.
        		{ label: 'Content', slug: 'syllabus' },
            { label: "Weekly Schedule", slug: "syllabus/timetable" }
        	],
        },
        "assignments",
        // {
        // 	label: 'Reference',
        // 	autogenerate: { directory: 'reference' },
        // },
      ],
      components: {
        Hero: "./src/components/Hero.astro",
      },
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
