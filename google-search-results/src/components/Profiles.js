import React from "react";
import ExternalLink from "./ExternalLink";

export default function Profiles({ profiles }) {
  return (
    <section className="profiles">
      <h3>Profiles</h3>
      <ul>
        {profiles.map(profile => (
          <ExternalLink profile={profile} />
        ))}
      </ul>
    </section>
  );
}
