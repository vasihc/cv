import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import Image from "next/image";
export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-2">
            <h1 className="text-2xl font-semibold">{RESUME_DATA.name}</h1>
            <p className="max-w-md   text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center   pt-1 text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                🇵🇹 {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1.5 pt-1  text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.personalWebsiteUrl ? (
                <Button variant="outline" size="xs" asChild>
                  <a
                    href={RESUME_DATA.personalWebsiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-1"
                  >
                    <GlobeIcon className="size-4" />
                    <span className="text-xs">Website</span>
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a
                    href={`tel:${RESUME_DATA.contact.tel}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-row gap-x-2 text-sm text-muted-foreground print:flex print:text-[12px]">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-32">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-semibold">About</h2>
          <p className="text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="mb-2 text-xl font-semibold">Work Experience</h2>
          <div className="flex flex-col gap-y-6">
            {RESUME_DATA.work.map((work) => {
              return (
                <div
                  key={work.company}
                  className="flex w-full flex-row items-start gap-x-3"
                >
                  <Image
                    src={
                      work.logo
                        ? `/logo/${work.logo}.png`
                        : RESUME_DATA.avatarUrl
                    }
                    alt={work.company}
                    width={40}
                    height={40}
                    className="flex-basis-8 size-8 rounded-lg object-cover"
                  />
                  <Card className="w-full">
                    <CardHeader className="flex flex-row gap-x-1">
                      <div className="flex w-full flex-col gap-y-1">
                        <div className="flex items-center justify-between gap-x-2 text-base">
                          <h3 className="inline-flex items-center justify-center gap-x-2 font-semibold leading-none">
                            <a
                              className="hover:underline"
                              href={work.link ?? "#"}
                            >
                              {work.company}
                            </a>

                            <span className="inline-flex gap-x-1">
                              {work.badges.map((badge) => (
                                <Badge
                                  variant="secondary"
                                  className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                                  key={badge}
                                >
                                  {badge}
                                </Badge>
                              ))}
                            </span>
                          </h3>
                          <div className="text-sm tabular-nums text-gray-500 mt-2">
                            {work.start} - {work.end ?? "Present"}
                          </div>
                        </div>

                        <h4 className="text-sm leading-none print:text-[12px]">
                          {work.title}
                        </h4>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-2 text-sm print:text-[10px]">
                      {work.description}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </Section>
        <Section className="print-force-new-page print:pt-20">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="flex flex-col gap-y-6">
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 print:text-[12px]">
                  {education.degree}
                </CardContent>
              </Card>
            );
          })}
          </div>
        </Section>
        <Section>
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge className="print:text-[10px]" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>

        <Section className="scroll-mb-16">
          <h2 className="text-xl font-semibold">Side Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  logo={project.logo}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
