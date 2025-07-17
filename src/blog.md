---
layout: layouts/base.njk
title: Blogs
bannerTitle: Blogs
bannerDescription: TO CREATE A POWERFUL PROJECT ONCE, A BIT OF LUCK IS ENOUGH
---

<section class="news">
  <div class="container">
    <div class="row">
      <div class="col-12">
		{% for post in collections.blog %}
			<div class="post wow fadeIn">
				<figure class="post-image">
					<img src="{{post.data.image}}" alt="Image">
				</figure>
				<div class="post-content">
					<div class="inner">
						<small class="post-date">{{post.data.displayDate}}</small>
						<h3 class="post-title"><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
						<div class="post-author"><img src="{{post.data.authorImage}}" alt="Image"> 
							<span>by <span>{{post.data.author}}</span></span>
						</div>
						<p class="post-text">{{post.data.description}}</p>
					</div>
				</div>
			</div>
		{% endfor %}        
  		</div>
  	</div>
  </div> 
</section>
