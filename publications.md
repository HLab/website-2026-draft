---
layout: page
title: Publications
description: Honey Lab publications - research papers on brain connectivity, temporal processing, and cognitive neuroscience
---

<section class="publications-section">
    <div class="container">
        {% assign sorted_pubs = site.data.publications | sort: "year" | reverse %}
        <ul class="pub-list">
            {% for pub in sorted_pubs %}
                {% include publication-entry.html pub=pub %}
            {% endfor %}
        </ul>
    </div>
</section>
