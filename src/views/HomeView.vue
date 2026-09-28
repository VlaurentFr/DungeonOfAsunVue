<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
  <main>
    <div>
      <div>
				<section>
					<div class='title-page'>
						<div id="redirect">
							<div class="title-container">
								<h1><span>Jouez</span>à notre système de JDR</h1>
								<p>Plongez dans un univers captivant et laissez libre cours à votre imagination. Avec un système inspiré de tactical RPG dans un univers de grimfantasy</p>
								<div>
									<RouterLink id="main" to="/Rules/creation">Apprendre à Jouez</RouterLink>
									<RouterLink to="/wiki">Explorez</RouterLink>
								</div>
							</div>
							<div class="background-image"></div>
							<div class="filter"></div>
						</div>
					</div>
				</section>
			</div>
		</div>
  </main>
</template>

<style scoped>
h3 {
	max-width: 600px;
}
#redirect {
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 64px;
    flex-wrap: wrap;
    width: fit-content;
}

#redirect .background-image {
	/* position: absolute;
	top: 0px;
	left: 0;
	right: 0;
	width: 100vw;
	height: 80vh;
	object-fit: cover;
	z-index: -1;
	transform: scaleX(-1); */
	/* clip-path: polygon( 0% 100%,3.333% 91.68%,3.333% 91.68%,4.43% 88.923%,5.707% 85.836%,7.143% 82.564%,8.72% 79.252%,10.417% 76.045%,12.213% 73.089%,14.09% 70.529%,16.027% 68.511%,18.003% 67.179%,20% 66.68%,20% 66.68%,22% 67.173%,24% 68.461%,26% 70.361%,28% 72.689%,30% 75.264%,32% 77.902%,34% 80.42%,36% 82.636%,38% 84.367%,40% 85.43%,40% 85.43%,42% 85.637%,44% 85.107%,46% 83.977%,48% 82.385%,50% 80.469%,52% 78.365%,54% 76.21%,56% 74.143%,58% 72.301%,60% 70.82%,60% 70.82%,62% 69.835%,64% 69.231%,66% 68.912%,68% 68.783%,70% 68.75%,72% 68.717%,74% 68.588%,76% 68.269%,78% 67.665%,80% 66.68%,80% 66.68%,81.997% 65.191%,83.973% 63.29%,85.91% 61.065%,87.787% 58.603%,89.583% 55.991%,91.28% 53.318%,92.857% 50.669%,94.293% 48.133%,95.57% 45.798%,96.667% 43.75%,100% 37.5%,100% 0%,96.667% 0%,96.667% 0%,95.57% 0%,94.293% 0%,92.857% 0%,91.28% 0%,89.583% 0%,87.787% 0%,85.91% 0%,83.973% 0%,81.997% 0%,80% 0%,80% 0%,78% 0%,76% 0%,74% 0%,72% 0%,70% 0%,68% 0%,66% 0%,64% 0%,62% 0%,60% 0%,60% 0%,58% 0%,56% 0%,54% 0%,52% 0%,50% 0%,48% 0%,46% 0%,44% 0%,42% 0%,40% 0%,40% 0%,38% 0%,36% 0%,34% 0%,32% 0%,30% 0%,28% 0%,26% 0%,24% 0%,22% 0%,20% 0%,20% 0%,18.003% 0%,16.027% 0%,14.09% 0%,12.213% 0%,10.417% 0%,8.72% 0%,7.143% 0%,5.707% 0%,4.43% 0%,3.333% 0%,0% 0% ); */
	

  position: absolute;
  width: 100vw;
  left: 0;
  height: 100vh;
	top: 0;
  z-index: -1;
  background-size: cover;
  background-position: top;
  background-image: url(../assets/cults/Breton.png);
  background-attachment: fixed;
	filter: opacity(0.4);
}
#redirect .filter {
	position: absolute;
	top: 0px;
	left: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	z-index: -1;
  background: linear-gradient(0deg, #090C11 10%, #f1f1f100 100%), no-repeat;
}

.title-container {
	color: var(--textColorWhite);
	filter: drop-shadow(2px 4px 6px black);
}

.title-container h1 {
	display: flex;
	flex-wrap: wrap;
	max-width: 700px;
	font-size: 56px;
}

.title-container h1 span {
 flex: 1;
}

.title-container p {
	margin-bottom: 10vh;
	filter: drop-shadow(2px 4px 6px black);
}
.title-container div {
	display: flex;
	gap: 32px;
	margin-bottom: 20vh;
}
.title-container #main, .title-container a, #rules a, .banner a  {
	border-radius: 8px;
	font-size: 1rem;
	padding: 8px 16px;
	transition: all 300ms ease-in-out;
	cursor: pointer;
	text-decoration: none;
	color: var(--textColor);
	border: solid transparent 2px;
}

.title-container #main, #rules a, .banner a {
	background-color: var(--primaryColor);
	color: white;

}
.title-container a {
	color: var(--textColorWhite);
}
.title-container a:hover {
	border: solid white 2px;
}

.title-container #main:hover, #rules a:hover, .banner a:hover {
	border: solid var(--primaryColor) 2px;
	background-color: transparent;
	color: var(--primaryColor);
}

#intro {
	margin: auto;
	text-align: center;
	width: 100%;
}

#intro h3 {
	margin-left: auto;
	margin-right: auto;
}
#intro p {
	margin-left: auto;
	margin-right: auto;
	max-width: 60ch;
}

#goods {
	margin-left: auto;
	margin-right: auto;
	margin-top: 64px;
	display: flex;
	gap: 32px;
	width: fit-content;
	flex-wrap: wrap;
}
#goods.col {
	flex-direction: column;
	margin-left: 0px;
}
#goods .good {
	display: flex;
	gap: 16px;
}

.good svg {
	font-size: 60px;
	padding: 15px;
	margin: 0 15px 0px 0;
	color: var(--primaryColor);
	border: var(--primaryColor) solid 1px;
	border-radius: 8px;
	width: 56px !important;
	height: 56px;
}

.good p {
	display: flex;
	/* justify-content: center; */
	align-items: center;
}

#rules, #basics {
	margin-top: 200px;
	margin-bottom: 200px;
}

#rules p {
	margin-bottom: 32px;
}
#rules .wrapper {
	margin-top: 200px;
}

/************************/
/********* Stepper **********/
/************************/
.stepper {
  display: flex;
	padding: 0;
}

.stepper__item {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
}

.stepper__item:not(:last-child):after {
	content: "";
	position: relative;
	top: calc(clamp(1.5rem, 5vw, 3rem) / 2);
	width: calc(100% - clamp(1.5rem, 5vw, 3rem) - calc(clamp(0.25rem, 2vw, 0.5rem) * 2));
	left: calc(50% + calc(clamp(1.5rem, 5vw, 3rem) / 2 + clamp(0.25rem, 2vw, 0.5rem)));
	height: 2px;
	background-color: #e0e0e0;
	order: -1;
}
.stepper__title {
  font-weight: bold;
  font-size: clamp(1rem, 4vw, 1.25rem);
  margin-bottom: 0.5rem;
	width: clamp(1.5rem, 5vw, 3rem);
	height: clamp(1.5rem, 5vw, 3rem);
	border-radius: 50%;
	border: var(--primaryColor) 4px solid;
	margin: 0 auto 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 300ms ease-in-out;
	cursor: pointer;
}
.stepper__title:hover {
  background-color: var(--primaryColor);
	color: white;
}

.stepper__desc {
  font-size: clamp(0.85rem, 2vw, 1rem);
  padding-left: clamp(0.25rem, 2vw, 0.5rem);
  padding-right: clamp(0.25rem, 2vw, 0.5rem);
}
/************************/
/********* BANNIERE JOUER **********/
/************************/
.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
	color: var(--textColor);
}
.banner::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100vw;
  height: 600px;
  background: linear-gradient(0deg, var(--backgroundColor) 10%, #f1f1f100 100%), no-repeat;
}
.banner-fade::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100vw;
  height: 750px;
  background: linear-gradient(0deg, var(--backgroundColor) 10%, #f1f1f100 100%), no-repeat;
}
.banner h3 {
  margin: 100px auto 0;
  z-index: 1;
}
.banner h4 {
  margin: auto;
  z-index: 1;
  font-size: 20px;
}
.banner a {
  width: fit-content;
  z-index: 1;
}
.banner p {
  text-align: center;
  z-index: 1;
}
.banner-fade div {
  /* position: absolute;
  width: 100vw;
  left: 0;
	right: 0;
  height: 500px;
  z-index: -1;
  object-fit: cover;
  object-position: center; */
  position: absolute;
  width: 100vw;
  left: 0;
  height: 750px;
  z-index: -1;
  background-size: cover;
  background-position: bottom;
  background-image: url(../assets/cults/forest.png);
  background-attachment: fixed;
	/* clip-path: polygon( 0% 60%,3.333% 50%,3.333% 50%,4.43% 46.723%,5.707% 42.987%,7.143% 38.93%,8.72% 34.694%,10.417% 30.418%,12.213% 26.242%,14.09% 22.307%,16.027% 18.752%,18.003% 15.718%,20% 13.344%,20% 13.344%,22% 11.705%,24% 10.802%,26% 10.551%,28% 10.867%,30% 11.668%,32% 12.869%,34% 14.387%,36% 16.137%,38% 18.036%,40% 20%,40% 20%,42% 21.976%,44% 23.957%,46% 25.929%,48% 27.879%,50% 29.793%,52% 31.657%,54% 33.458%,56% 35.182%,58% 36.815%,60% 38.344%,60% 38.344%,62% 39.812%,64% 41.155%,66% 42.368%,68% 43.443%,70% 44.375%,72% 45.157%,74% 45.782%,76% 46.245%,78% 46.538%,80% 46.656%,80% 46.656%,81.997% 46.542%,83.973% 46.271%,85.91% 45.872%,87.787% 45.369%,89.583% 44.789%,91.28% 44.159%,92.857% 43.504%,94.293% 42.851%,95.57% 42.227%,96.667% 41.656%,100% 40%,100% 100%,96.667% 100%,96.667% 100%,95.57% 100%,94.293% 100%,92.857% 100%,91.28% 100%,89.583% 100%,87.787% 100%,85.91% 100%,83.973% 100%,81.997% 100%,80% 100%,80% 100%,78% 100%,76% 100%,74% 100%,72% 100%,70% 100%,68% 100%,66% 100%,64% 100%,62% 100%,60% 100%,60% 100%,58% 100%,56% 100%,54% 100%,52% 100%,50% 100%,48% 100%,46% 100%,44% 100%,42% 100%,40% 100%,40% 100%,38% 100%,36% 100%,34% 100%,32% 100%,30% 100%,28% 100%,26% 100%,24% 100%,22% 100%,20% 100%,20% 100%,18.003% 100%,16.027% 100%,14.09% 100%,12.213% 100%,10.417% 100%,8.72% 100%,7.143% 100%,5.707% 100%,4.43% 100%,3.333% 100%,0% 100% ); */
}

#section-jouez {
	margin-top: 128px;
	margin-bottom: 256px;
}

/************************/
/********* FAQ **********/
/************************/
details{
  background-color: var(--primaryColor);
  color: #fff;
  font-size: 1rem;
	border-radius: 8px;
	border: 1px solid #aaa;
	margin-bottom: 8px;
}

summary {
  padding: .5em 1.3rem;
  list-style: none;
  display: flex;
  justify-content: space-between;  
  transition: all 300ms ease-in-out;
	font-size: 1.2rem;
	cursor: pointer;
	margin-bottom: 0em;
}

summary::-webkit-details-marker {
  display: none;
}

summary:after{
  content: "\002B";
}

details[open] summary {
    border-bottom: 1px solid #aaa;
    
}

details[open] summary:after{
  content: "\00D7";
}

details div{
  padding: .5em 1.5em;
	background-color: #333;
}
details a {
	color: var(--primaryColor);
}
</style>

<style scoped>
/************************/
/********* Features **********/
/************************/
#features-slider {
	display: flex;
	flex-direction: row;
	gap: 12px;
}
.feature {
	background: var(--backgroundColor);
	width: 100%;
	margin: 1rem 0;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	position: relative;
	border: var(--primaryColor) solid 1px;
	text-shadow: 1px 1px 2px black;
	overflow: hidden;
	margin-bottom: 200px;
	color: var(--textColorWhite);
	background-color: black;
}
.feature:hover {
	width: 200%;
}
.feature p {
	height: 170px;
	position: relative;
	opacity: 0;
	padding: 1em;
	z-index: 2;
}

.feature h4 {
	padding: 1em;
	z-index: 2;
	opacity: 0;
}
.feature:hover h4 {
	opacity: 1;
}

.feature:hover p {
	opacity: 1;
}

.feature img {
	top: 0;
	height: 100%;
	width: 100%;
	object-fit: cover;
	position: absolute;
	/* filter: saturate(0.5); */
	z-index: 1;
}
.feature:hover img {
	opacity: 0.4;
}
.feature .filter {
	top: 0;
	height: 100%;
	width: 100%;
	position: absolute;
  background: linear-gradient(0deg, var(--backgroundColor) 10%, #f1f1f100 100%), no-repeat;
	mix-blend-mode: multiply;
	z-index: 1;
}

h4 {
	position: relative;
	margin-bottom: 64px;
}

.feature h4:after {
	opacity: 0;
  content: "";
  width: calc(100% - 40px);
  height: 4px;
  background-color: var(--textColorWhite);
  position: absolute;
  bottom: -16px;
  right: 40px;
  animation: discover 1800ms ease-in-out 300ms;
}
.feature:hover h4:after {
	opacity: 1;
}

#rules img, #basics img {
	height: 400px;
	-webkit-mask-image: linear-gradient(black, transparent);
  mask-image: linear-gradient (black, transparent);
}

@media screen and (max-width: 1270px) {
	#rules img, #rules .filter {
		display: none;
	}
}
@media screen and (max-width: 768px) {
	#features-slider {
		flex-direction: column;
	}
	.feature {
		margin-bottom: 1rem;
	}
	.feature:hover {
		width: 100%;
	}
	#basics img {
		display: none;
	}
}

footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1em 0;
}


</style>
