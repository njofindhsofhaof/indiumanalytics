PHOTONICS

## Large-scale photonic chiplet Taichi empowers

## 160-TOPS/W artificial general intelligence

Zhihao Xu1,2,3†, Tiankuang Zhou1,2,4†, Muzhou Ma^1 , ChenChen Deng^2 , Qionghai Dai2,4,5*, Lu Fang1,2,4*

The pursuit of artificial general intelligence (AGI) continuously demands higher computing performance.
Despite the superior processing speed and efficiency of integrated photonic circuits, their capacity
and scalability are restricted by unavoidable errors, such that only simple tasks and shallow models
are realized. To support modern AGIs, we designed Taichi—large-scale photonic chiplets based on
an integrated diffractive-interference hybrid design and a general distributed computing architecture
that has millions-of-neurons capability with 160–tera-operations per second per watt (TOPS/W)
energy efficiency. Taichi experimentally achieved on-chip 1000-category–level classification (testing at
91.89% accuracy in the 1623-category Omniglot dataset) and high-fidelity artificial intelligence–
generated content with up to two orders of magnitude of improvement in efficiency. Taichi paves the
way for large-scale photonic computing and advanced tasks, further exploiting the flexibility and
potential of photonics for modern AGI.

# T

he rapid evolution in artificial general in-
telligence (AGI) is accompanied by the
ever-increasing demands of computing
performance. For complex multimodality
information from the real world, high-
capacity and high-throughput computing
architectures are urgently needed ( 1 , 2 ). Con-
tinuously demanding higher performance be-
comes challenging in the post-Moore era ( 3 ).
Computation with electronic devices such as
graphic processing units (GPUs) for advanced
artificial intelligence (AI) models [e.g., the
foundation model in language processing
( 4 ) and large-scale intelligent imaging ( 5 )] is
associated with saturating energy efficiency,
which is unsustainable to support modern
AGIs. The pursuit of a balance between com-
puting capability and energy efficiency is a
persistent goal in high-performance com-
puting research ( 6 , 7 ).
Photonic computing has attracted ever-growing
attention, offering unprecedented light-speed
low-consumption computing ( 8 , 9 ). The high
parallelism of photonics can facilitate basic
image operators ( 10 , 11 ), reservoir computing
( 12 ), neural networks ( 8 , 13 – 15 ), and more. The
development of integrated photonics promises
high–form factor photonic computing chips to
implement intelligent tasks ( 9 , 16 – 21 ). However,
current integrated photonic computing, specifi-
cally optical neural networks (ONNs), usually
consists of hundreds to thousands of param-
eters with tens of tunable parameters. Only

```
basic tasks—e.g., simple pattern recognition ( 9 )
and vowel recognition ( 17 )—are supported. De-
spite the advantages of spatial compactness and
energy efficiency, photonic integrated circuits
(PICs) are still restricted by unavoidable and
time-varying errors, providing limited network
scale and computing capability that hardly sup-
ports real-world AGI tasks.
To achieve large-scale and high–energy ef-
ficiency photonic computing, simply enlarging
existing photonic neural network chips is im-
practical because the inevitable analog noise is
exponentially expanded with the increase of
```
```
the neural network layers. Magnifying the scale
of existing architectures would not propor-
tionally improve the performances. Instead of
building deep and large models, we designed
Taichi—a large-scale, high-efficiency photonic
AI chip with a scalable and high-robustness
distributed computing architecture for real-
world AGI tasks. By combining the advan-
tages of optical diffraction and interference,
Taichi passively perceived the high-dimensional
inputs as compact representations with universal
diffraction and performed efficient task-specific
feature embeddings with fully reconfigurable
Mach-Zehnder interferometer (MZI) ( 22 )arrays.
At the same time, the distribution protocol
partitioned large tasks into several distrib-
uted subtasks to be parallel processed with
Taichi chiplets. Besides, the computing re-
sources provided by these stand-alone chiplets
were also distributed and cooperated to scale
up the capability of Taichi, enabling several
large-scale real-world tasks, including complex
1000-category classifications and versatile con-
tent generations.
Taichi made it possible to deploy large mod-
els in photonics for AGI tasks with twofold
energy efficiency improvement compared
with that of current PICs. The computing
accuracies were comparable to those of their
electronic counterparts with an order of mag-
nitude of improvement in area efficiency. We
expect that Taichi will keep up with the rapid
growth of computing resources demands from
modern AI.
```
RESEARCH

(^1) Sigma Laboratory, Department of Electronic Engineering,
Tsinghua University, Beijing, China.^2 Beijing National
Research Center for Information Science and Technology
(BNRist), Beijing, China.^3 Tsinghua Shenzhen International
Graduate School, Shenzhen, China.^4 Institute for Brain and
Cognitive Science, Tsinghua University (THUIBCS), Beijing,
China.^5 Department of Automation, Tsinghua University,
Beijing, China.
*Corresponding author. Email: daiqionghai@tsinghua.edu.cn (Q.D.);
fanglu@tsinghua.edu.cn (L.F.)
†These authors contributed equally to this work.
Table 1. Comparison with SOTA optical computing architecture both on-chip and in free
space.N/A indicates no available data.
Source
Area
efficiency*
Energy
efficiency*
Total
neuron
Tunable
neuron
Network
scale
Tasks
performed
This work
878.
TMACS/mm^2
160.
TOPS/W 4256 160 13.96 million
1000-category
classification,
content
.....................................................................................................................................................................................................................generating
Feldmannet al.( 18 )
81.
TMACS/mm^2
0.
TOPS/W 64 64 29,
10-category
.....................................................................................................................................................................................................................MNIST
Ashtianiet al.( 16 )
1.
TMACS/mm^2
2.
TOPS/W 67 67 67
Four-category
alphabet
.....................................................................................................................................................................................................................classification
Shenet al.( 17 ) N/A N/A 213 213 1065 †
Four-category
vowel
.....................................................................................................................................................................................................................recognition
Zhouet al.( 15 ) N/A
0.
TOPS/W
0.
million‡
0.
million‡
1.
million‡
10-category
.....................................................................................................................................................................................................................MNIST
Xuet al.( 9 ) N/A N/A 867 ‡ 867 ‡ N/A
10-category
.....................................................................................................................................................................................................................MNIST
NVIDIA H100 PCIe
( 41 , 42 ) N/A
0.
TOPS/W N/A N/A N/A
General purpose
computing
.....................................................................................................................................................................................................................
*By theoretical calculations. †We assume that a network of five layers is used. ‡These neurons are realized in
optical free space.
Downloaded from https://www.science.org on April 15, 2026


Fig. 1. Taichi: A large-scale photonic chiplet with a distributed computing architecture for a million-neuron on-chip network model.(A) Taichi uses a
distributed computing architecture to form a shallow-in-depth but broad-in-width network architecture. The reconfigurable diffractive-interference hybrid photonic
chiplet serves as the fundamental building block for a variety of advanced machine intelligence tasks, including 1000-category classification andcontent generation.
(B) Taichi chiplets design. Diffractive-based encoder and decoder are applied for input data perception, and the MZI array serves as feature embeddings. Conv.,
convolutional layer; NL., nonlinear layer; Pool., pooling layer; Elec., electronic; Opto., optical; Calc., calculation.

```
Downloaded from https://www.science.org on April 15, 2026
```

Fig. 2. Schematics for constructing Taichi.(A) Execution units for Taichi (TEUs).
(B) Multiple TEUs cooperate to form a TEU cluster under the computation
distributing protocol. TEU clusters perform a sliding window behavior for larger input
data. (C) Complex tasks are decomposed as multiple simple tasks, and each simple
task is handled with a series of TEU clusters (marked as a“path”). (D)Theoretical

```
performance analysis. With the increasing error rate for each network layer, the
ideal layer amount (depth) decreases in physical systems. However, computation
distributing with multiple paths can effectively enlarge the network scale for
more computing capacity. Prev., previous; Enc., encoder; Dec., decoder; Diag., diagonal.
Emb.,embedding;Err.,error;Acc.,accuracy;P.,path.
```
```
Downloaded from https://www.science.org on April 15, 2026
```

Taichi: A large-scale photonic chiplet with a
distributed computing architecture
Taichi introduces a universal distributed com-
puting architecture with a diffractive-interference
hybrid photonic chip (Fig. 1A). Unlike conven-
tional approaches that stack a series of layers
for deep computing, Taichi distributes com-
puting resources into multiple independent clus-
ters, organizes clusters separately for subtasks,
and finally synthesizes these subtasks for com-
plex advanced tasks.
The flexibility in optical diffraction and inter-
ference inspired us with an architecture for
optical computing to explore its own way for
large-scale network models and complex tasks.
Specifically, the fully connecting property of
an optical diffraction layer could provide more
deformability than a convolutional layer in
conventional deep neural networks, which
indicates that optical networks have the po-
tential to realize the same transformation with
fewer layers than electronic systems. Shallow
in depth but broad in width, the distributed

```
architecture of Taichi was designed for scaling
up the computing capacity in a sustainable
and efficient way. In the CIFAR-10 dataset,
Taichi with four distributed layers realized
comparable accuracy to a 16-layer electronic
VGG-16 network ( 23 ).
Figure 1B shows the Taichi chip, which con-
sists of double diffractive units for large-scale
input and output data, and a tunable matrix
multiplication with MZI arrays for reconfigur-
able feature embeddings and hardware multi-
plexing.Thesecomponentsarethebasicon-chip
execution units for Taichi (TEUs), which take
advantage of the strong deformability of op-
tical diffractions and interference. The diffrac-
tive encoderyand decoderqcompressed the
high-dimensional input data, markedly reducing
the spatial redundancy and retaining sufficient
information for AI tasks. The tunable MZI arrays
performed feature embeddings for the highly
compressed data with the optimized param-
eters. We trained the global encoder and decoder
diffractive weights with the full 1000-category
```
```
ImageNet dataset, assuming that there will be
a good coverage of all kinds of two-dimensional
(2D) features. These weights remained fixed
in our experiments for different datasets, and
only the feature embedding MZI array weights
demanded retraining independently.
We compare our Taichi with state-of-the-art
(SOTA) optical computing architectures and
the latest electronic GPU (NVIDIA H100) in
Table 1. Taichi has achieved up to two orders
of magnitude greater energy efficiency [having
an energy efficiency of up to 160.82 tera-
operations per second per watt (TOPS/W)]
and area efficiency [878.90 tera–multiply-
accumulates per square millimeter (TMACS/
mm^2 )] with the diffractive-interference hybrid
chiplets. High on-chip neuron density (up to
4256 total neurons and 160 tunable neurons)
and large network scales (up to 13.96 million in
experiment) were also achieved with the dis-
tributed architecture of Taichi. The detailed
efficiency analysis is discussed in the supple-
mentary text, note S2.
```
Fig. 3. Large-scale photonic
chiplets for 1000-category
classification.(A) Multipath
CIFAR-10 binary labels, where
each object in the dataset is
labeled with“ 0 ”or“ 1 ”in
each path. Single-path
(conventional practice) clas-
sification accuracy is
restricted, but multipath
(proposed) classification
accuracy keeps increasing
with increasing numbers of
parameters. (B) CIFAR-
accuracy comparison
between conventional on-chip
photonics, free-space pho-
tonics, electronic-based
SOTA architecture, and Taichi
with different numbers of
paths. (C) Experimental
(bars) and theoretical (curve)
10-category classification
accuracy with respect to the
number of layers. (D) Taichi
path outputs of a sample in
CIFAR-10. The minimum path
number may give wrong
decisions, but adding more
paths may correct the mis-
take. (E) Confusion matrix for
CIFAR-10 with seven paths.
(F) Results for 100-category
classification task on mini-
ImageNet dataset for both
simulation (blue) and experi-
ment (purple). (G) Results for
1623-category classification task on Omniglot dataset for both simulation (blue) and experiment (purple). Obj., objects; Stan.,
standard; Opt., optical; Elec., electrical; GT., ground truth.

```
Downloaded from https://www.science.org on April 15, 2026
```

The building blocks and detailed structure
of Taichi
Figure 2A illustrates the layout of Taichi chip-
lets. The layout was divided into three sections.
1) The input diffractive encoder (DE) (labeled
with blue) takes an 8 × 8 grating coupler array
for 2D information receiving. In total, 64 chan-
nels of input were encoded, and the effective
information was compressed to eight channels

```
with diffractive modulation weights (the meta-
slots’lengths).
2) The interference feature embedding (IE)
(labeled with purple) takes Mach-Zehnder mod-
ulator (MZM) arrays for arbitrary matrix multi-
plications. A matrix was decomposed into the
multiplication of a unitary matrixU,adiagonal
matrixDiag, and another unitary matrix V
through singular value decomposition (SVD).
```
```
The reconfigurable feature embedding values,w,
were optically realized with the first MZM
weightswU, the variable optical attenuator (VOA)
weightswD, and the last MZM weightswV.
3) The output diffractive decoder (DD) (labeled
with blue) is reversed relative to the DE. The
diffractive decoding was trained to match the
encoding, and the 8 × 8 output grating coupler
array provided a maximum of 64 channels of
```
Fig. 4. Large-scale photonic chiplets for versatile content generations.
(A) Music-generation network with TEU cluster. (B) The original and generated
four-voice note pitch patterns in Bach’sstyle.(C) Note distribution of the generated
Bach music. (D) Iterative music-generation process with Bach-index to measure
how close the generated music is to Bach’sstyle.(E) Image-generation network with

```
TEU cluster. (F) Image-generation results for three different artist styles. Images
of a handwritten digit“ 4 ”(with random noise) and real scenes are input to Taichi for
stylized image generation according to the given artists’styles. An independent
classification network (style probabilities) is used to identify the style of the
generated images. Iter., iteration; Prob., probability; Ori., original.
```
```
Downloaded from https://www.science.org on April 15, 2026
```

output capacity. More details are provided in
the materials and methods and figs. S9 to S12.
Twenty DEs, four IEs, and four DEs were
deployed as a new TEU to deal with a 32 × 32
patch (Fig. 2B). Each DE processed a distrib-
uted patch of 8 × 8, and the original 1024
channels of input data were encoded to 32
channels. The next four IEs computed the fea-
ture embeddings, and the last four DDs de-
coded the embeddings to 256 channels for output.
The reconfigurable and scalable DE-IE-DD
framework could fit different patch sizes and
task difficulties by adjusting the amount of dis-
tributed DE, IE, and DD modules to form
various feature embedding channel amounts
and output channel amounts. When large images
were input to the TEU cluster, TEUs performed a
nonoverlapping“sliding window”convolutional
behavior to perceive the full image.
Figure 2C demonstrates the distributed archi-
tecture with TEU clusters. Both the task and
computing resources were distributed. The
Taichi network consisted ofNdistributed sub-
nets (paths) with identical structures but dif-
ferent weights. The task-distributing protocol
decomposed the complex task into several easy
subtasks. Specifically, the 100-category classifi-
cation was distributed toNbinary classifica-
tions. In each binary classification, all the samples
were regrouped to only two categories with
respect to the distributing protocol. By de-
signing the protocol, every original category had
a specific regrouping strategy, which guaranteed
that no confusion existed in the results synthe-
sizing among theNpaths.
The robustness of a distributed ONN is higher
than that of a combined traditional model. To
evaluate, we consider the smoothness of a
networkFusing the Lipschitz DistanceLip(F),
which is defined as ( 24 )

```
jjFaðÞFbðÞ≤Lip FðÞjjab ð 1 Þ
```
Here,aandbare any network input. A
lowerLip(F) value indicates a higher smooth-
ness and robustness level for networkF.
Considering the noisehdue to the imper-
fectness of optical devices and the fabrica-
tion process in a photonic network withD
layers (assuminghis independent and iden-
tical in each layer), the revised lower bound for
Lip(F)willbe

```
Lip FðÞ≥
```
```
hD
ffiffiffiffi
D
```
```
p
```
```
ffiffiffiffiffiffi
nd
p
```
```
s
```
```
ð 2 Þ
```
Here,nis the total sample amount for
training,dis the equivalent sample dimen-
sions, andpis the total network parameters in
F(supplementary text, note S1). When there is
zero uncertainty, a higherD(deeper networks)
will always outperform the shallow ones, but
Dwill have an upper bound when uncertainty
exists. We plot the relationships between layer

```
numberDand robustnessLip(F)underdif-
ferent uncertainty levels in Fig. 2D. The accu-
mulated noise or uncertainty in consecutive
layers would flood the signal, resulting in per-
formance degradation. Thus, we designed the
distributing strategy for photonic computing
architectures where each path only required
a shallow network to output a binary result
with higher error tolerance.
The accuracy was incrementally improved by
applying more paths with the error-correcting
output codes (ECOC) scheme ( 25 )intaskdis-
tributing. The network does not need to per-
form every binary decision accurately because
the ECOC could automatically find the incorrect
path. Adding extra paths could enable a higher
error tolerance, which was an extra robust
design in large models. We also calculated the
theoretical overall accuracy with respect to path
amount under different path accuracy according
to the ECOC scheme (Fig. 2D), indicating that
even with poor per-path performance, the overall
accuracy could have the opportunity to recover
with enough paths.
The task distributing and results synthesizing
formed a nonlinear computing architecture,
alleviating the burden for inside-network non-
linear devices. In Taichi, each path only took a
squared function (amplitude to intensity) pro-
vided by the photon detectors as nonlinear
computing. Each of them processed a simple
binary classification task that a network with
reasonable scale was capable of doing. The
difficulty of independently training multiple
small networks was much lower than that of
training a large traditional model.
An on-chip path synthesizing module was
fabricated (fig. S15) for calculating the differ-
ences between path outputs and ideal outputs.
The ideal outputs for each category formed a
temporal sequence and were compared with
the path outputs of the testing sample, and the
exact category with the lowest difference was
voted as the final classification results for the
testing sample.
```
```
On-chip photonic computing for
1000-category classification
We developed the scalable Taichi consisting of
multiple independent paths for general classi-
fication tasks. Taking the CIFAR-10 dataset for
illustration, a minimum of four paths were
necessary for 10-category classification because
10 is between 2^3 and 2^4. In each path, a binary
decision was made according to the task dis-
tribution protocol (Fig. 3A), where we used
code“ 0 ”and code“ 1 ”to represent the binary
coding for each path. The first four paths were
basic paths, and the extra three paths were
introduced to improve the accuracy (see mate-
rials and methods for code selection). All seven
paths parallel processed the same input inde-
pendently, and then the seven subdecisions
were assembled as a 7-bit binary code to be
```
```
compared with the predefined standard codes
(Fig. 3A) for each category. The final decision
was made according to the minimum Euclidean
distance.
To verify that going wider could overcome
the limitations of going deeper in physical
networks, we designed two comparisons (Fig. 3,
AandC).Wesettheerrorlevelto±5%,which
matched the real variation in the physical
system in Fig. 3C. As the layer amount in-
creased, both theoretical and actual CIFAR-
accuracy reached the peak (49%) and then
decreased with conventional deep network
structure. Figure 3A compares the accuracy
performance between a single-path network
(conventional) with several layers and a multi-
path network (proposed). In the single-path
network, each layer consisted of 16.8 thousand
parameters, and with fewer than six layers, the
accuracy reached the peak. For multipath com-
parison, each path had 20.9 thousand parame-
ters and three layers to match the total parameter
scale with the single-path one. Under such a scale,
each path achieved the average binary accu-
racy of 84%, and the 10-category accuracy kept
goingupwithincreasingnumbersofpaths.
To test the performance, we first took the
CIFAR-10 dataset and set each path with six
layers (which was the optimal scale under ac-
tual noise levels, with 16-8-8-4-4-1 TEUs per
layer), and the binary accuracy reached 94%
on average for the seven paths. With the sub-
results from the basic four paths, the final
accuracy reached 76.68%, which already out-
performs the existing on-chip architectures.
With all seven paths, the final result increased
to 93.65%, which is comparable to the perform-
ance of currently popular electronic neural
networks. The confusing matrices of the whole
test set for seven paths are displayed in Fig. 3E,
and the accuracy performance benchmarks be-
tween Taichi, conventional on-chip network
architecture, free-space optical computing archi-
tecture, and electronic counterparts are listed
in Fig. 3B. We also show how extra paths helped
in correcting the wrong classification cases (Fig.
3D). Taking a frog image as an example, the path
outputs from the seven paths were plotted as a
histogram—purple bars for basic paths and
blue bars for extra paths. When calculating the
similarity between the path outputs and the
ideal labels for each category, a wrong decision
wasmadeifweonlytookthebasicpaths(i.e.,
the frog was wrongly regarded as a ship), but
that error was corrected if all seven paths were
considered together.
To further explore the potential of Taichi, we
extended the scales by deploying more paths
for more-advanced tasks. In each path, the layer
amount remained unchanged, but each layer
would consist of more TEUs (16-16-8-8-4-4-
TEUs per layer). Under the 100-category
mini-ImageNet ( 26 ) dataset, the averaged
binary accuracy for each path was 92.97%
```
```
Downloaded from https://www.science.org on April 15, 2026
```

in numerical calculations and 88.05% in
optical experiments. With seven basic paths
and eight extra paths, the total 100-category
accuracy was 92.76% in numerical simulations
and 87.34% in actual on-chip tests. The correct
sample counts for each category are shown as
a histogram (Fig. 3F). Under the 1623-category
Omniglot ( 27 , 28 ) character dataset, 11 basic
paths and six extra paths were deployed with
the binary accuracy of 97.32% and 94.21% in
numerical calculations and experiments, re-
spectively. Finally, 1623-category classifica-
tion accuracies of 94.96% and 91.89% were
achieved in numerical calculations and ex-
periments, respectively (Fig. 3G; we summed
up the correct sample counts every 16 catego-
ries to reduce the total number of bars for a
better visual effect).

On-chip photonic computing for versatile
content generation

Content generation is popular in machine in-
telligence ( 29 , 30 ),butexistingon-chipphoto-
nic networks are limited bytheirscaleandoutput
channels, so reconstructing high-resolution 2D
signals is impractical. Versatile content genera-
tion under various modalities could be realized
with Taichi.
Figure 4A demonstrates the music-generation
network with TEUs. We treated the generation
of each note as a classification problem choosing
from 47 possible pitches with 16 notes before
and after it as input. For training, we used a
Markov chain Monte Carlo (MCMC) method
( 31 ) with a 95% acceptance rate to optimize the
style of generated music clips (materials and
methods). As the training proceeded, our net-
work gave a note distribution in the frequency
(pitch) domain to represent the music style
(Fig. 4C; Bach’s style is used in this case). After
training, parameters in our network were fixed
for Bach’s style of music generation. We evaluated
the generated results through an independently
trained network, which gave a“Bach-index”
output that embodied the Bach style probabi-
lity of the results. Figure 4D demonstrates the
generation process. Random noise was used as
the initial input, having a Bach-index of 6.61%.
As the iteration proceeded, patterns formed in
thenotepitchdiagram,andtheBach-index
increased. After 500 iterations, the generation
result reached a Bach-index of 95.17%, indicat-
ingthatithadatypicalBachstyle.Inthiscase,
the training and generating were independent-
ly processed for four total voices. Finally, Taichi
generated a synthesized four-voice chorale that
is highly Bach styled (Fig. 4B).
Besides generating 1D signals, Taichi also
supported 2D input–2D output signals. TEUs
were used to construct an image-generation
network ( 32 – 34 ) (Fig. 4E). Images from dif-
ferent artists and styles were used to train our
network for generations. We took different
scales to generate different levels of textures

```
(fig. S21): Larger scales (fig. S21, scale 1) were
first used to generate coarse textures, and
smaller scales (fig. S21, scale 2) were then used
for fine textures, achieving stylized images
with multiscale textures. To evaluate the re-
sults, we fine-tuned a pretrained VGG-16 net-
work ( 23 ) to give artist style classification results
(Fig. 4F, bar diagrams). We tested Taichi un-
der both small images (a hand-written digit
“ 4 ”from the MNIST dataset) and large-scale
real-world scene images. The input images
were stylized, preserving the object shapes in
the scenes and adding artistic textures as well
(Fig. 4F).
An extended experiment of font style trans-
ferring was also implemented to further demon-
strate the advanced content-generation ability
for Taichi chiplets. With these extra experi-
ments, we validated that Taichi had the capa-
bility of not only imitating the artist styles but
also extracting higher-level semantic infor-
mation from 2D images (fig. S19).
```
```
Discussion
In this work, we designed Taichi—alarge-scale
diffractive-interference hybrid photonic AI chip
with a flexible distributed computing archi-
tecture. With regards to the photonic chip,
Taichi further explores the massively parallel
connection of photonicsfor better computing
efficiency compared with other TOPS/W-level
( 35 , 36 ) frameworks. In the future, with direct
laser writing (DLW) ( 37 ) and phase change
materials (PCMs) ( 38 ), all the weights could be
reconfigurable, which couldleadtoflexibility
improvements. Furthermore, the readily avail-
able on-chip laser sources, modulators, and de-
tectors could be copackaged into a single
platform ( 39 ) and cointegrated through wafer
bonding ( 40 ), which promises higher levels of
integration. With regards to the distributed
computing architecture, it was not an exclusive
algorithmonlyforTaichi.Thecomputationand
task distributing could also help existing PICs to
extend their computing capacity for more-
advanced tasks.
In modern AGI, the trend of dealing with
more-advanced tasks is irreversible. Taichi in-
dicates the great potential of on-chip photonic
computing for processing a variety of complex
tasks with large network models, which en-
ables real-life applications of optical computing.
We anticipate that Taichi will accelerate the
development of more powerful optical solu-
tions as critical support for the foundation
model and a new era of AGI.
```
```
REFERENCES AND NOTES
```
1. S. Bubecket al., Sparks of Artificial General Intelligence:
    Early experiments with GPT-4. arXiv:2303.12712 [cs.CL]
    (2023).
2. N. Feiet al.,Nat. Commun. 13 , 3094 (2022).
3. M. M. Waldrop,Nature 530 ,144–147 (2016).
4. R. Bommasaniet al., On the Opportunities and Risks
    of Foundation Models. arXiv:2108.07258 [cs.LG] (2022).
       5. X. Yuanet al.,Light Sci. Appl. 10 , 37 (2021).
       6. J. A. Ang, D. J. Mountain,Computer 55 , 156– 162
          (2022).
       7. D. Reed, D. Gannon, J. Dongarra, Reinventing High
          Performance Computing: Challenges and Opportunities.
          arXiv:2203.02544 [cs.DC] (2022).
       8. X. Linet al.,Science 361 , 1004–1008 (2018).
       9. X. Xuet al.,Nature 589 ,44–51 (2021).
       10. M. Miscuglioet al.,“Conference on Lasers and Electro-Optics,
          J. Kanget al., Eds. (Optica Publishing Group, 2021), paper
          AW3E.5.
       11. J.-F. Morizuret al.,J. Opt. Soc. Am. A 27 , 2524– 2531
          (2010).
       12. M. Nakajima, K. Tanaka, T. Hashimoto,Commun. Phys. 4 ,
          (2021).
       13. T. Yanet al.,Phys. Rev. Lett. 123 , 023901 (2019).
       14. J. Liet al.,Sci. Adv. 7 , eabd7690 (2021).
       15. T. Zhouet al.,Nat. Photonics 15 , 367–373 (2021).
       16. F. Ashtiani, A. J. Geers, F. Aflatouni,Nature 606 , 501– 506
          (2022).
       17. Y. Shenet al.,Nat. Photonics 11 , 441–446 (2017).
       18. J. Feldmannet al.,Nature 589 ,52–58 (2021).
       19. X. Yuan, Y. Wang, Z. Xu, T. Zhou, L. Fang,Nat. Commun. 14 ,
          7110 (2023).
       20. T. Zhou, W. Wu, J. Zhang, S. Yu, L. Fang,Sci. Adv. 9 , eadg
          (2023).
       21. Z. Xu, X. Yuan, T. Zhou, L. Fang,Light Sci. Appl. 11 , 255
          (2022).
       22. W. R. Clements, P. C. Humphreys, B. J. Metcalf,
          W. S. Kolthammer, I. A. Walmsley, An Optimal Design for
          Universal Multiport Interferometers. arXiv:1603.
          [physics.optics] (2017).
       23. K. Simonyan, A. Zisserman, Very Deep Convolutional
          Networks for Large-Scale Image Recognition. arXiv:1409.
          [cs.CV] (2015).
       24. S. Bubeck, M. Sellke, A Universal Law of Robustness via
          Isoperimetry. arXiv:2105.12806 [cs.LG] (2022).
       25. M. A. Bagheri, G. A. Montazer, S. Escalera,“AISP 2012 - 16th
          CSI International Symposium on Artificial Intelligence and
          Signal Processing(AISP, 2012), pp. 508–513.
       26. J. Denget al., in2009 IEEE Conference on Computer Vision and
          Pattern Recognition(IEEE, 2009), pp. 248–255.
       27. B. M. Lake, R. Salakhutdinov, J. B. Tenenbaum,Science 350 ,
          1332 – 1338 (2015).
       28. B. M. Lake, R. Salakhutdinov, J. B. Tenenbaum,Curr. Opin.
          Behav. Sci. 29 ,97–104 (2019).
       29. Y. LeCun, Y. Bengio, G. Hinton,Nature 521 , 436– 444
          (2015).
       30. W. Wang, J. Shen,IEEE Trans. Image Process. 27 , 2368– 2378
          (2018).
       31. N.Metropolis,A.W.Rosenbluth,M.N.Rosenbluth,
          A. H. Teller, E. Teller,J. Chem. Phys. 21 ,1087– 1092
          (1953).
       32. L. A. Gatys, A. S. Ecker, M. Bethge, A Neural Algorithm of
          Artistic Style. arXiv:1508.06576 [cs.CV] (2015).
       33. T. Q. Chen, M. Schmidt, Fast Patch-based Style
          Transfer of Arbitrary Style. arXiv:1612.04337 [cs.CV]
          (2016).
       34. L. Gatys, A. S. Ecker, M. Bethge, inAdvances in Neural
          Information Processing Systems 28 (NIPS 2015), C. Cortes,
          N. Lawrence, D. Lee, M. Sugiyama, R. Garnett, Eds.
          (Curran Associates, Inc., 2015).
       35. Y. Chenet al.,Nature 623 ,48–57 (2023).
       36. W. Zhanget al.,Science 381 , 1205–1211 (2023).
       37. K. Sunet al.,Science 375 , 307–310 (2022).
       38. M. Delaneyet al.,Sci. Adv. 7 , eabg3500 (2021).
       39. H. Shuet al.,Nature 605 , 457–463 (2022).
       40. T. Komljenovicet al.,Proc. IEEE 106 , 2246–2257 (2018).
       41. NVIDIA, NVIDIA H100 Tensor Core GPU Datasheet (2024);
          https://resources.nvidia.com/en-us-tensor-core/nvidia-
          tensor-core-gpu-datasheet.
       42. NVIDIA, NVIDIA H100 Tensor Core GPU Architecture Overview
          (2024); https://resources.nvidia.com/en-us-tensor-core/
          gtc22-whitepaper-hopper.
       43. Z. Xu, T. Zhou, M. Ma, C. Deng, Q. Dai, L. Fang, Large-scale
          photonic chiplets Taichi empowers 160 TOPS/W artificial
          general intelligence, version 1, Dryad (2024); https://doi.org/
          10.5061/dryad.m63xsj497.

```
ACKNOWLEDGMENTS
Funding:This study was supported by National Science and
Technology Major Project grant 2021ZD0109901 (L.F., T.Z., and
```
```
Downloaded from https://www.science.org on April 15, 2026
```

C.D.), Natural Science Foundation of China (NSFC) grant
62125106 (L.F., T.Z., Z.X., C.D., and M.M.), NSFC grant 62088102
(L.F., T.Z., Z.X., C.D., and Q.D.), and the Shuimu Tsinghua
Scholar Program (T.Z.).Author contributions:Conceptualization:
Z.X. and L.F. Methodology: Z.X. and T.Z. Investigation: Z.X., T.Z.,
C.D., L.F., and Q.D. Visualization: Z.X., M.M., and T.Z. Funding
acquisition: L.F. and Q.D. Project administration: L.F. Supervision:
L.F. Writing–original draft: Z.X., T.Z., C.D., and L.F. Writing–
review & editing: L.F., Z.X., T.Z., M.M., and C.D.Competing
interests:The authors declare that they have no competing

```
interests.Data and materials availability:All data needed to
evaluate the conclusions in the paper are present in the main
text or the supplementary materials. The repository for the
data is available on Dryad ( 43 ). The Taichi chiplets testing sample
is available upon signing a material transfer agreement.
License information:Copyright © 2024 the authors, some rights
reserved; exclusive licensee American Association for the
Advancement of Science. No claim to original US government
works. https://www.science.org/about/science-licenses-
journal-article-reuse
```
```
SUPPLEMENTARY MATERIALS
science.org/doi/10.1126/science.adl
Materials and Methods
Supplementary Text
Figs. S1 to S
Reference ( 44 )
Submitted 29 September 2023; resubmitted 11 January 2024
Accepted 11 March 2024
10.1126/science.adl
```
```
Downloaded from https://www.science.org on April 15, 2026
```

### Large-scale photonic chiplet Taichi empowers 160-TOPS/W artificial general

### intelligence

```
Zhihao Xu, Tiankuang Zhou, Muzhou Ma, ChenChen Deng, Qionghai Dai, and Lu Fang
```
```
Science 384 (6692),. DOI: 10.1126/science.adl
```
```
Editor’s summary
Rapid advances in artificial general intelligence (AGI) come with increased performance and energy efficiency
requirements for next-generation computing. Photonic computing has the potential to achieve these goals, but despite
attracting attention, current photonic integrated circuits, specifically optical neural networks (ONNs), have limited scale
and computing capabilities, barely supporting modern AGI tasks. Xu et al. explored a distributed diffractive-interference
hybrid photonic computing architecture to effectively increase the scale of the ONN to the million-neuron level. They
experimentally realized an on-chip 13.96-million-neuron ONN for complex, thousand-category-level classification and
AI-generated content tasks. The present work is a promising step toward real-world photonic computing, supporting
various applications in AI. —Yury Suleymanov
```
```
View the article online
https://www.science.org/doi/10.1126/science.adl
Permissions
https://www.science.org/help/reprints-and-permissions
```
Use of this article is subject to the Terms of service

Science (ISSN 1095-9203) is published by the American Association for the Advancement of Science. 1200 New York Avenue NW,
Washington, DC 20005. The title Science is a registered trademark of AAAS.

Copyright © 2024 The Authors, some rights reserved; exclusive licensee American Association for the Advancement of Science. No claim
to original U.S. Government Works

```
Downloaded from https://www.science.org on April 15, 2026
```

