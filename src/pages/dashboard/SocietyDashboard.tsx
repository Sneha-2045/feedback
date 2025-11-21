import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Award, Calendar, Flame, Megaphone, Music3, Plus, Sparkles, Star, Ticket, TrendingUp, Users } from "lucide-react";

const SocietyLogo = ({ logo, name, fallbackIcon }: { logo: string; name: string; fallbackIcon: string }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (imageError) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="text-6xl mb-2">{fallbackIcon}</div>
        <div className="text-lg font-bold text-white">{name}</div>
      </div>
    );
  }

  return (
    <>
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl">{fallbackIcon}</div>
        </div>
      )}
      <img 
        src={logo} 
        alt={name}
        className={`w-full h-full object-contain ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
};

const communityStats = [
  { label: "Events staged", value: "15", detail: "9 campuses", icon: Calendar },
  { label: "Active members", value: "487", detail: "+42 this week", icon: Users },
  { label: "Avg. rating", value: "4.8", detail: "crowd favorite", icon: Star },
  { label: "Feedback pulses", value: "1,234", detail: "92% response", icon: Megaphone },
];

const eventDeck = [
  {
    title: "TechFest 2024 Experience",
    tag: "Event Feedback",
    status: "Live",
    responses: "284/350 (81%)",
    sentiment: { pos: 89, neu: 8, neg: 3 },
    accent: "from-primary/50 to-emerald-400/40",
  },
  {
    title: "AI/ML Workshop Pulse",
    tag: "Workshop",
    status: "Live",
    responses: "156/180 (87%)",
    sentiment: { pos: 92, neu: 6, neg: 2 },
    accent: "from-accent/50 to-pink-400/40",
  },
];

const vibeTopics = [
  "Great organization",
  "Need breakout zones",
  "Loved the speakers",
  "More workshops",
  "Better timing",
  "Food upgrades",
  "Venue aesthetic",
  "Aftermovie hype",
];

const collabTracks = [
  { title: "Sponsor-ready recaps", detail: "90-sec reels auto-generated", badge: "4 brands locked" },
  { title: "Volunteer leveling", detail: "XP for check-ins & rescue missions", badge: "112 streaks" },
  { title: "Hybrid event mesh", detail: "Dual-stream watch parties across campuses", badge: "3 cities lit" },
];

const societies = [
  {
    id: "saturnalia",
    name: "Saturnalia",
    subtitle: "50th Echoes of Eternity",
    logo: "/society-logos/images-4.png",
    fallbackIcon: "🎭",
    color: "from-purple-500/20 to-indigo-500/20", // Changed from yellow to purple
    borderColor: "border-purple-500/30", // Changed from yellow to purple
  },
  {
    id: "food-festival",
    name: "Food Festival",
    subtitle: "Flavoured Illusions",
    logo: "/society-logos/images-3.jpeg",
    fallbackIcon: "🍕",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
  },
  {
    id: "ieee",
    name: "IEEE",
    subtitle: "Thapar Chapter",
    logo: "/society-logos/45298983.png",
    fallbackIcon: "⚡",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    id: "iste",
    name: "ISTE",
    subtitle: "Thapar Chapter",
    logo: "/society-logos/images-5.png",
    fallbackIcon: "🔬",
    color: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/30",
  },
  {
    id: "microsoft-ambassador",
    name: "Microsoft Learn",
    subtitle: "Student Ambassador",
    logo: "/society-logos/1722854995324.jpeg",
    fallbackIcon: "💻",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
  },
  {
    id: "acm",
    name: "ACM",
    subtitle: "Thapar Chapter",
    logo: "/society-logos/images-6.png",
    fallbackIcon: "💡",
    color: "from-sky-500/20 to-cyan-500/20",
    borderColor: "border-sky-500/30",
  },
];

const SocietyDashboard = () => {
  const navigate = useNavigate();

  const handleSocietyClick = (societyId: string) => {
    if (societyId === "saturnalia") {
      // Directly open the HTML file for Saturnalia
      window.open('/sat.html', '_blank');
    } else {
      navigate(`/dashboard/society/${societyId}`);
    }
  };

  const getButtonText = (societyId: string) => {
    return societyId === "saturnalia" ? "Fill Form" : "View Events";
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="hero-grid absolute inset-0 opacity-60" />
      <div className="glowing-orb absolute -top-20 left-0" />
      <div className="glowing-orb absolute bottom-0 right-0 delay-[1500ms]" />

      <header className="relative z-10 border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Music3 className="h-6 w-6 text-secondary" />
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">FeedbackFlow</p>
              <p className="text-lg font-semibold">Society Control Room</p>
            </div>
          </div>
          <Button className="rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600 shadow-lg shadow-violet-500/30" onClick={() => navigate("/")}>
            Exit stage
          </Button>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl space-y-10 px-6 py-10">
        <section className="flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-4">
            <Badge className="border-white/30 bg-white/10 text-white/80 backdrop-blur">Campus collab league</Badge>
            <div>
              <p className="text-sm uppercase tracking-[0.6em] text-white/50">Society Pulse</p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                  Spin feedback into festival XP.
                </span>
              </h1>
            </div>
            <p className="max-w-2xl text-white/70 text-lg md:text-xl">
              Events, societies, and sponsors stay in sync with live hype meters, sentiment reels, and instant action cards—styled like a headline drop.
            </p>
          </div>
          <Button className="gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 font-semibold shadow-lg shadow-primary/30 transition hover:-translate-y-1 hover:shadow-primary/50">
            <Plus className="h-5 w-5" />
            Launch new drop
          </Button>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {communityStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="group border-white/10 bg-white/5 p-5 text-white shadow-xl shadow-black/30 transition transform hover:-translate-y-2 hover:border-secondary/60"
              >
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span className="tracking-wide">{stat.label}</span>
                  <Icon className="h-4 w-4 text-secondary transition group-hover:scale-110" />
                </div>
                <p className="mt-3 text-3xl font-semibold tracking-tight">{stat.value}</p>
                <p className="text-xs text-white/60">{stat.detail}</p>
              </Card>
            );
          })}
        </section>

        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">Campus Societies</p>
              <h2 className="text-3xl font-semibold">Active Organizations</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {societies.map((society) => (
              <Card
                key={society.id}
                className="group cursor-pointer border-white/10 bg-gradient-to-br bg-white/5 p-6 text-white shadow-xl shadow-black/30 transition hover:-translate-y-2 hover:border-primary/60 hover:shadow-primary/20"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`rounded-2xl border-2 ${society.borderColor} bg-gradient-to-br ${society.color} p-4 w-full aspect-video flex items-center justify-center overflow-hidden relative`}>
                    <SocietyLogo 
                      logo={society.logo} 
                      name={society.name}
                      fallbackIcon={society.fallbackIcon}
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-semibold">{society.name}</h3>
                    <p className="text-sm text-white/70 mt-1">{society.subtitle}</p>
                  </div>
                  <Button 
                    className="w-full rounded-full bg-gradient-to-r from-primary to-accent font-semibold shadow-lg shadow-primary/40 transition hover:-translate-y-1"
                    onClick={() => handleSocietyClick(society.id)}
                  >
                    {getButtonText(society.id)}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <Card className="border-white/10 bg-white/5 p-8 text-white shadow-2xl shadow-secondary/20">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-primary" />
              <p className="text-sm uppercase tracking-[0.4em] text-white/70">Spotlight reel</p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { title: "TechFest headliners", detail: "4.9/5 vibes", icon: Award },
                { title: "AI Workshop turnout", detail: "320 ticket scans", icon: TrendingUp },
                { title: "Coding Marathon buzz", detail: "156 story drops", icon: Megaphone },
              ].map((highlight) => (
                <div key={highlight.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <highlight.icon className="h-4 w-4 text-secondary" />
                    {highlight.title}
                  </div>
                  <p className="text-xl font-semibold">{highlight.detail}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-white/10 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 p-8 text-slate-900 shadow-xl shadow-primary/20">
            <div className="flex items-center gap-3">
              <Flame className="h-6 w-6 text-accent" />
              <p className="text-sm uppercase tracking-[0.4em] text-slate-700">Energy meter</p>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { label: "Streaked volunteers", value: 112, note: "on fire" },
                { label: "City watch parties", value: 3, note: "hybrid mesh" },
                { label: "Sponsor pings", value: 9, note: "ready decks" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-700">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <Progress value={Math.min(item.value, 100)} className="mt-2 h-2 overflow-hidden rounded-full bg-white/10" />
                  <p className="text-xs text-emerald-600">{item.note}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          {eventDeck.map((event) => (
            <Card
              key={event.title}
              className="group border-white/10 bg-white/5 p-6 text-white shadow-xl shadow-black/30 transition hover:-translate-y-2 hover:border-primary/60"
            >
              <div className="flex items-center justify-between">
                <Badge className="border-white/30 bg-white/10 text-xs text-white/80">{event.tag}</Badge>
                <Badge className="border-none bg-white/15 text-white/80">{event.status}</Badge>
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{event.title}</h3>
              <p className="text-sm text-white/70">{event.responses}</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                <div>
                  <p className="text-emerald-300 font-semibold">{event.sentiment.pos}%</p>
                  <p className="text-white/60">Positive</p>
                </div>
                <div>
                  <p className="text-amber-300 font-semibold">{event.sentiment.neu}%</p>
                  <p className="text-white/60">Neutral</p>
                </div>
                <div>
                  <p className="text-rose-300 font-semibold">{event.sentiment.neg}%</p>
                  <p className="text-white/60">Negative</p>
                </div>
              </div>
              <Button className="mt-6 w-full rounded-full bg-gradient-to-r from-primary to-accent font-semibold shadow-lg shadow-primary/40 transition hover:-translate-y-1">
                Open insights
              </Button>
              <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${event.accent}`} />
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <Card className="border-white/10 bg-white/5 p-8 text-white shadow-2xl shadow-secondary/20">
            <div className="flex items-center gap-3">
              <Ticket className="h-6 w-6 text-secondary" />
              <p className="text-sm uppercase tracking-[0.4em] text-white/70">Buzzwords</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {vibeTopics.map((topic) => (
                <Badge
                  key={topic}
                  className="rounded-full border-white/20 bg-white/10 px-4 py-2 text-white/80 transition hover:bg-white/15 hover:text-white"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="border-white/10 bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 p-8 text-slate-900 shadow-xl shadow-primary/20">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              <p className="text-sm uppercase tracking-[0.4em] text-slate-700">Collab playbooks</p>
            </div>
            <div className="mt-6 space-y-4">
              {collabTracks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-secondary/50"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <Badge className="border-none bg-white/15 text-xs text-slate-700">{item.badge}</Badge>
                  </div>
                  <p className="text-sm text-slate-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default SocietyDashboard;