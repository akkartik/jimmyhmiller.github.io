import {
  Heading,
  Javascript,
  Haskell,
  BlockQuote,
  Term,
  GlobalLayout,
  Title,
} from "../utils.js";


const CDDNonLinear = () => (
	<GlobalLayout>
		<Title text="CDD and the Non-Linearity of Discovery"></Title>
		<p>
			I have written previously about how Card Driven Development is
			extremely detrimental to the development process. In that essay I
			pegged the problem on CDDs lack of proper knowledge sharing and its
			incorrect splitting of responsibility. Today I want to focus on a
			different attribute of CDD that has been bothering me lately. This
			is the start of me trying to deliver on the promissory note I left
			at the end of the last essay. If we are to replace CDD we must start
			with an understanding of what programming is. That is our starting
			point today. Programming is theory building, does CDD help us build
			theories?
		</p>
		<p>
			Perhaps my last essay could be seen as a bit of a caricature. I
			don’t think it is, I have in fact seen this process play out in
			practice. But let’s assume I am wrong. Maybe CDD isn’t disasterous.
			Maybe I gave too much credit to a process for creating such turmoil.
			What then would the problem with CDD be? If you don’t see the social
			problems of CDD that I do why should you not use it?
		</p>
		<Heading
			size="2"
			text="Theory Building and  the Non-Linearity of Discovery"
		></Heading>
		<p>
			Theory Building is an activity of trying to take information about
			the world and it put it to some particular use. Sherlock Holmes
			works to build his theories to apprehend criminals. Someone
			decorating a home builds their theory so that they might make their
			home cozy, habitable, and enjoyable to live in. A software engineer
			builds their theory to enable them to solve the problems at hand,
			not only the problems of today but the problems that will arise
			tomorrow.
		</p>
		<p>
			Consider an instance of complex theory building, how does it
			proceed? Does Sherlock Holmes proceed from clue to clue, following a
			linear path to apprehension of the criminal? No, the investigation is
			full of false starts, of reimaginings, of unexpected twists. But
			what is most important are Holmes's thoughts on the matter. Holmes's theory
			involves learning lessons and responding to them in unusual,
			particular ways. The process of learning and responding is important
			to his investigation. If Holmes merely gathered the data, brought it
			to the police and let them decide his next steps, would he have been
			as effective?
		</p>
		<p>
			The same is true for all theoretical investigations. These
			investigations give us embodied knowledge. The fact that <em>we</em>{" "}
			worked out the theory is an important aspect of its creation. We had
			to go through this process of discover, we had to have the false
			starts, without them we would not have created the same theory.
		</p>
		<Heading size="2" text="CDD and its Incentives for Linearity"></Heading>
		<p>
			On the surface it might seem like CDD should allow for this
			non-linear process. CDD is common in agile circles where small
			iterations, retrospectives, and course corrections are advocated.
			Isn’t agile explictly a response to methodologies like waterfall
			that didn’t allow for non-linearity? In one sense of the term, yes,
			agile does not assume linearity. It accepts that you cannot know the
			destination from the beginning. But remember, the question is about
			CDD and the non-linearity of discover, not agile and planning
			non-linearity.
		</p>
		<p>
			CDD by its splitting of responsibility between two separate groups,
			product and engineering, makes using the results of discovery
			incredibly difficult. What is crucially missing is the allowance for
			discovery to take center stage when it comes to planning. As
			engineers work to build a theory (by programming) their discoveries
			must be incorporated into the plan. But what mechanism is available
			in CDD for doing so? Well, the primary mechanism is the card. This
			is the communication tool of choice, it is the pre-requisite for
			getting work sanctioned.
		</p>
		<p>
			But here is where the problem starts. The card cannot serve the task
			of feedback that it has been tasked with. It is inadequate for a few
			reasons. First, the time horizon for feedback to be incorporated and
			for course correction to occur is too long. As engineers are
			programming, they might find that their theory was incorrect, that
			the work they had planned to do is no longer the correct choice.
			What should they do? Well, given CDD the pressure is to forge ahead
			and file a card for future consideration. But often the correct
			answer is to stop the work you planned and instead go learn, go
			develop your theory better so you know the correct moves going
			forward.
		</p>
		<p>
			The card also fails to serve as a proper medium for conveying the
			information it needs to about this discovery process. First, cards
			are factual pieces of proposed works. They often take the form of a
			user story along with acceptance criteria. But this is not what is
			needed. Because CDD has split the responsibility for deciding what
			work is to be performed between product and engineering, what the
			engineer now has to do is convince product that what they have
			discovered is the truth. They need to help product understand their
			theory.
		</p>
		<p>
			Finally, the card fails because it assumes that all the work to be
			done has a deliverable. The process of discovery is however not like
			this. When working to build a theory much of the work we do has no
			direct outcome. We make guesses that turn out the be wrong. We
			pursue paths that are dead ends. But this work was not useless. If
			programming is theory building and the primary output is knowledge
			rather than a build artifact or source code, then the engineer
			learning new things is the best possible outcome.
		</p>
		<Heading size="2" text="Making CDD Work"></Heading>
		<p>
			In the previous section, I have ignored some of the nuances that
			occur in the CDD process that might make it seem I am not being
			fair, let me address those. First, is it true that engineers
			are not given the flexibility to course correct without creating a
			card? Well, if the card is written the way many advocates of CDD
			recommend, it would seem no. CDD advocates often say that a card
			should be about detailing a concrete customer problem, rather than a
			particular solution. It is up to the team to determine how best to
			solve this problem.
		</p>
		<p>
			Here we can say a few things. First, it is readily admitted by most
			parties that achieving this goal is something must companies
			struggle with. So CDD as it is practiced, rather than in
			its ideal form still runs into this issue quite a bit. But we can go
			further than this. What problems make sense to tackle, what problems
			are meaningful depends on the theory we have. How many times have we
			done work where we solved a particular problem, and solved it
			well, only to find out our customers didn’t use it? Many times, our
			customers themselves told us about this problem, will even admit it
			solves the problem as originally stated, but it turns out they were
			wrong about their needs. Setting forth a problem constrains our
			theories, if in the process of discovery we come up with a new
			theory that sets us on a new course with new problems, what are we
			do to given CDD?
		</p>
		<p>
			Next, I have acted as if the card is the only medium of communication
			available. If we view any guide on how to practice a CDD process, we
			will find this isn’t accurate. The card is a starting point, it
			precedes the conversation. Planning is not about taking the card as
			given, it is about discussing the card and coming to an agreement as
			a team on the plan to move forward. And yet still this isn’t enough
			to handle the discovery process. First, the card frames the
			discussion as does the planning meeting. The goal is to come to a
			decision for action, not to contemplate a theory. But even if this
			isn’t a barrier, the card won’t be adequate, because the knowledge
			that has been gained by the engineer might not be expressible for
			them. We can know all sorts of things we can’t express. We can even
			teach others those things we cannot express. But the card is not the
			medium for doing so.
		</p>
		<p>
			Finally there are all sorts of different types of cards. What it
			might seem I am describing is a CDD process without the Spike card.
			The spike card is purpose built for the discovery process. It is a
			time-boxed card made for discover where the deliverable is the
			findings that the spike uncovered. And yet, this isn’t adequate. The
			discover process is not a phase, it is not a time-boxed part of the
			process, it just is the process. If programming is theory building,
			then what has been relegated to a “spike” is really the main
			function we are performing, with code as a side-effect. But CDD get
			this exactly backwards.
		</p>
		<Heading
			size="2"
			text="What Does This Process Look Like Without CDD?"
		></Heading>
		<p>
			It might seem like am saying that engineers ought to just spend all
			their time thinking, never committing to any plan, never taking
			actions toward concrete goals. I can certainly understand that
			reaction. CDD is meant to keep engineers grounded and to hold them
			accountable. We all have seen engineering teams who seemingly
			twiddle their thumbs all day, working and reworking things to no
			end, never delivering anything of value.
		</p>
		<p>
			Getting rid of CDD is not getting rid of accountability, nor is it
			getting rid of progress. It is about moving the decision making
			process closer to those who have to execute on these decisions. It
			is about accepting that knowledge matters when we need to make be
			sure we make the right decisions. It is about accepting that we need
			non-linear processes to discover what we ought to be working on.
		</p>
		<p>
			Our products today are technology. They are composed of bits. Why
			then should the “product” team not be experts in technology? How can
			they make the right decisions for the product if they don’t truly
			understand it at the core, fundamental level? At the same time, how
			can engineers be expected to make the right decisions if they aren’t
			given the data they need and allowed to build the theory regardless
			of what path reality pushes them towards?
		</p>
		<p>
			CDD’s push towards linearity is what causes this feeling that we can
			never accomplish anything in software. It is why year after year it
			seems that customer needs aren’t being met. Over and over again CDD
			forces us down a linear path to dead-ends. It prevents feedback
			mechanisms from operating as they should. If we are to make
			engineering more productive and help engineers have a better
			understand of the problems they truly need to solve, we must rid
			ourselves of CDD.
		</p>
	</GlobalLayout>
);


export default CDDNonLinear;