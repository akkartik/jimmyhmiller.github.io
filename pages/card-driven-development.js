import {
  Heading,
  GlobalLayout,
  Title,
} from "../utils.js";

import Link from 'next/link';

const CardDrivenDevelopment = () => <GlobalLayout>
  <Title text="Card Driven Development" />
  <p>
    Every company I've worked for has practiced what I call "Card Driven
    Development" (CDD). CDD is an umbrella term meant to encompass quite
    a few different development processes. The name comes from the use
    "cards" (digital or physical) found in the Scrum and Kanban
    processes as a means of organizing work, but CDD extends further than
    these two processes. It encompasses formal or informal processes as long
    as they have a few things in common.
  </p>
  <p>
    CDD is a way of approaching software development that involves a splitting
    of responsibilities. In CDD, there must be at least two groups, the first,
    often called "Engineering", is responsible for technical duties
    including writing code, maintaining code, and operational concerns like
    managing servers. The second group, often known as "Product" or
    informally "the business", is responsible for researching,
    detailing, and prioritizing what work needs to be done. Product gives work
    to Engineering, they prioritize what work will be done next, and they
    message out the status of the work to various interested parties.
  </p>
  <p>
    This split in responsibility means that the day to day work accomplished
    by Engineering and Product looks very different. Engineering, when
    operating well, is about shipping working software to customers, whereas
    Product's work is an act of delegation. This can often lead engineers to
    believe that Product does nothing, but this could not be further from the
    truth. Product's days are packed with work. Product's role involves being
    pulled in many directions, they must keep track of the work in progress,
    while continuously engaging with the various interested parties vying for
    their attention; attempting to get their parties particular needs worked
    on next. Product's work involves status updates, meetings, research, and
    above all else detailing and prioritizing work for Engineering.
  </p>
  <Heading size="2" text="The Card" />
  <p>
    This last part is where the Card makes its appearance. The work needed to
    be done is too large to write down and detail in its entirety. Even if
    this task could be achieved, it isn't desirable because by the time it
    were written down, the facts on the ground may have changed. So a system
    of dividing work is adopted. In CDD this system is the card.
  </p>
  <p>
    Cards are a place to describe work that needs to be done and in what order
    it should be done in. Cards break work into small chunks, typically
    focused on functionality that some particular party would like. Cards
    serve as a meeting point for Product and Engineering. Product writes
    cards, prioritizes cards, and gives them to Engineering as work that needs
    to be done. Engineering then works in the order given by product.
    Sometimes this means taking multiple cards at a time and making a time
    commitment for their completion (often called a sprint). Other times cards
    are pulled in one by one as time and resources permit (this process is
    often referred to as a Kanban-style workflow).
  </p>
  <p>
    As described here the card making process only involves Product. In
    reality, there is usually a collaboration between Product and Engineering
    around cards. Typically cards are reviewed and discussed before they ever
    are handed to an Engineer to be worked on. Some of these cards may be
    "technical cards", cards created and owned by Engineering. With
    the exception of these technical cards though, cards are owned
    by Product. Product has the final say in the priority of cards and also
    serves as the "acceptor" for the fact that the work described in
    cards has been accomplished.
  </p>
  <p>
    The above is meant to serve as a neutral description of what is entailed
    by CDD. I imagine the process as I've described above is familiar to most
    reading this. CDD is a process that many companies adopt and do so for
    good reason. But despite the best of intentions by companies that adopt
    CDD, it is a disastrous process that leads to some of the worst
    issues plaguing modern software development. My contention is that
    companies that adopt CDD will inevitably exacerbate these issues, leading
    to engineer dissatisfaction and decreased productivity.
  </p>
  <Heading size="2" text="A Bit About Creating Software" />
  <p>
    Creating software is a complex task. Features, that may seem on the
    surface trivial, may involve multiple months of effort, minor
    modifications to an existing process may cause a cascade of required
    changes across many code bases, and seemingly innocent changes may
    introduce pernicious bugs. While there are most certainly ways to mitigate
    these problems, this is the reality the Software Engineer faces. The
    development of software does not exist in a vacuum, our new code must
    continue to work with old code, our legacy systems require continual
    maintenance, and the interactions between pieces of our system continue to
    grow in complexity.{" "}
  </p>
  <p>
    Any view about how creating software ought to be done needs a realistic
    picture of the constraints that Software Engineers face. The software
    creation process at any given time is constrained by all the decisions of
    past engineers who had a hand in building the software in question. But
    this set of decisions involves not only all engineers who have worked at
    the company, but also the authors of the libraries on which the software
    is built. The design decisions of past engineers provide deep constraints
    on how much effort a given change will take. The choice of a relational or
    non-relational datastore limits the sort of data-integrity constraints we
    can easily enforce, the library we have chosen for our frontend constrains
    our ability to support things like server side rendering that may be
    needed for SSO considerations, and the decision of how to split (or not)
    our application into services constrains our deployment and delivery
    strategy, just to name a few examples.
  </p>
  <Heading size="2" text="The Problem with Card Driven Development" />
  <p>
    Card Driven Development, as I have defined it, is concerned primarily with
    a division of labor. But with this division of labor comes a division of
    knowledge. Engineering has knowledge of the software systems needed for
    the business to operate and Product has knowledge of the various
    interested parties desires. In themselves, these divisions aren't an
    issue, but as I hope to show the process of CDD limits the sharing of
    knowledge across these domains, causing issues for both the software being
    created and the larger goals of the business.
  </p>
  <p>
    What precisely do I mean by CDD limiting knowledge? As I'm using this term
    it implies at least two things. First that the knowledge that is shared
    between Product and Engineering happens at the wrong level and in the
    wrong order, limiting the usefulness of the knowledge transfer. Second,
    that the sorts of knowledge shared between Product and Engineering allows
    neither to accomplish their job as well as they ought. The recipricol
    nature of this issue is incredibly important. CDD isn't just bad for
    Engineering, it is bad for Product and bad for the business.
  </p>
  <Heading size="3" text="Wrong Level, Wrong Order" />
  <p>
    Imagine you are a novice cook looking to tackle a recipe a bit above your
    skill level. You follow the instructions step by step diligently, spending
    close to an hour on prepping and cooking the ingredients and as you come
    to the end of the recipe it says, "To finish the dish, poach an egg
    and place it on top". You immediately become frustrated. While the
    recipe is telling you everything needed to make the dish, you have no idea
    how to poach an egg and even if you figure it out, poaching takes time and
    your dish is already complete.
  </p>
  <p>
    Unlike our cooking example, CDD gives engineers knowledge at a far too
    granular level. Cards are about tiny pieces of functionality. They don't
    provide the context needed to place a given piece of functionality into
    its larger context. This focus on granularity can cause the big picture to
    be lost. It isn't uncommon to implement an entire card based on the
    details it provided just to find out that it didn't actually solve the
    problem it was intended to. Had the card been written at a higher level,
    the constraints on what counted as a solution to the problem would have
    been clearer.
  </p>
  <p>
    But not only is the information too granular, it is often delivered out of
    order. It isn't uncommon to work on 2 or 3 cards, make great progress and
    then once you reach the next card you find out the work you just
    implemented was wrong. What you learned on card 4 was the information you
    really needed at the beginning. This new feature or constraint casts all
    previous work in a different light. The assumptions you made when
    implementing the others cards are now invalid. This means you have one of
    two choices, rework the previous work, or write a hack. I think we all
    know what happens most often.
  </p>
  <Heading size="3" text="Wrong Sorts of Knowledge" />
  <p>
    Cards detail functional requirements of our software. They are more often
    than not about the inputs and outputs of our systems. They detail UI
    components, data requirements, user interactions, etc... And yet these are
    not what Engineering needs to do its job most effectively. The businesses
    we create are not about these inputs and outputs. Ultimately as businesses
    we are trying to solve problems. Our users face issues that we are
    providing a service to solve. These users may be our internal customer
    support, other companies, or consumers, regardless, they have a problem
    and we are tasked with fixing it.
  </p>
  <p>
    In order for these problems to be fixed software needs to be written by
    Engineering. How can Engineering know if their software is effective? Or
    in other words, how can Engineering know if their software solves the
    users problem? By first understanding at a deep level what problem the
    user is actually facing. This is truly the fundamental problem with CDD,
    it distances engineers from the problems they are solving. No longer do
    engineers know or care deeply about these problems. No longer do they
    spend their time thinking about these problems and how best to solve them.
    Instead they are consumed by details, consumed by sub-optimal answers.
  </p>
  <p>
    But this isn't just a problem for Engineering. Product has actually
    burdened themselves unncessarily by adopting CDD. Product's job is to
    understand the user, but there is never just one user. Product has to
    understand all these various users with vastly different needs. This is a
    hard enough task on its own, but with CDD understanding the users is a
    small part. Instead Product must spend their time trying to fit these
    problems into the system that Engineering has developed. They must figure
    out a way to address the problems the user is facing in a system that is
    largely opaque to them.{" "}
  </p>
  <p>
    The opaque nature of the system that Engineering has built is a constant
    frustration for Product. Constantly their best attempts at making small
    changes are thwarted. Even the most reasonable sounding request gets push
    back from Engineering. It becomes harder and harder for product to make
    the changes they are requesting. Ultimately, in CDD Product is being asked
    to do something nearly impossible, propose changes to a system that is
    largely invisible to them. Try as they might, knowing the difference
    between what changes can easily be made to the system and what are hard
    are completely opaque to Product, and yet their job depends on knowing
    exactly that.
  </p>
  <Heading size="3" text="Bad for the Business" />
  <p>
    Engineers who lack understanding of the users problems may in fact solve
    the wrong problems. This might mean shipping a feature that no one uses.
    It might mean removing some feature that was actually important. It may
    mean leaving out a feature that was sorely needed. All of these problems
    can drive customers away or prevent a company from gaining more customers.
    If the users of the system are internal, it may cause inefficiencies that
    cost the company money and can even affect employee morale.
  </p>
  <p>
    If Product has been tasked with designing new features and lacks the
    knowledge needed to do so effectively, inefficiencies in the development
    cycle can appear. As Product proposes more changes, estimates grow. More
    time is spent in meetings discussing changes than actual time implementing
    them. As development slows, demands for changes continue to grow. Users
    talking to Product get increasingly frustrated as to why their changes
    haven't made it in. More often than not, this means changes to internal
    tools are deprioritized leading to inefficiencies and frustrating process
    that can lead to high turn over in customer support.
  </p>
  <Heading size="2" text="Strained Relationships and Failure" />
  <p>
    This lack of knowledge on both sides can lead to friction between Product
    and Engineering. It is incredibly common for companies to have a strained
    relationship between Engineering and Product. I think many of these issues
    stem from this confusion of roles. Both sides feel powerless to achieve
    the ends they have been tasked with. Over time their jobs get harder and
    harder and it always seems to be the other groups fault.
  </p>
  <p>
    A strained Product and Engineering relationship can spell the end for a
    project or even a whole company. More often than not, strained product
    relationship leads to frustrated engineers. These engineers leave, taking
    with them their hard-earned knowledge of the system they helped build. As
    engineers become frustrated, they often become defensive. When asked for
    estimates they worry how the estimates might be used and so they pad them.
    Knowing that anyone can detect if they constantly over-estimate, they slow
    their work, meeting nearly exactly the estimates they put forward.
  </p>
  <p>
    Development time stretches on and on. The system the company has invested
    so much in grows worse and worse to make changes to. All the original
    engineers have left. Product is sick and tried of trying to force changes
    through. Eventually the business decides to do the big rewrite and the
    cycle repeats. If we are ever to break this cycle, we must get rid of card
    driven development. What I think should replace it is a topic for another
    post, but I will say that whatever will must start with an understanding
    of <Link href="/incommunicability"><a>what programming is</a></Link>.
  </p>
</GlobalLayout>;

export default CardDrivenDevelopment;