
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


export default function BioCards() {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    return (
        <div className="bios-cards">

            {/* <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <span style={{ fontSize: "3em" }}>Let't me show you scroll animation 😀</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Animator animation={ZoomInScrollOut}>
                        <span style={{ fontSize: "3em" }}>I'm FadeUpScrollOut ✨</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={2}>
                    <Animator animation={FadeUp}>
                        <span style={{ fontSize: "3em" }}>I'm FadeUp ⛅️</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={3}>
                    <div>
                        <span style={{ fontSize: "3em" }}>
                            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- I'm Seonghyeok -
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
                        </span>
                    </div>
                </ScrollPage>
                <ScrollPage page={4}>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <span style={{ fontSize: "3em" }}>Done</span>
                        <span style={{ fontSize: "3em" }}>
                            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
          </span>
                    </Animator>
                </ScrollPage>
            </ScrollContainer> */}

            <ScrollContainer>
                {/* <CardGroup>

                    <Card>
                        <ScrollPage page={0}>
                            <Animator animation={FadeUp}>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
      </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Animator>
                        </ScrollPage>
                    </Card>


                    <Card>
                        <ScrollPage page={1}>
                            <Animator animation={ZoomInScrollOut}>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Animator>
                        </ScrollPage>
                    </Card>


                    <Card>
                        <ScrollPage page={2}>
                            <Animator animation={FadeUp}>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
      </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Animator>
                        </ScrollPage>
                    </Card>

                </CardGroup> */}

                <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Dark card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </ScrollContainer>
        </div>
    )
}