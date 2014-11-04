This post is intended as a brief walkthrough of the bag of features technique for object classification described in <a href="http://www.xrce.xerox.com/Research-Development/Publications/2004-0104/%28language%29/eng-GB">Visual categorization with bags of keypoints.</a> OpenCV features2d library contains much of the functionality needed to implement this technique.<br />
<br />
There are basically 4 steps you need to perform in order to have a basic implementation of the bag of words object classification:<br />
<ol>
<li>Extracting features from a set of training images.&nbsp;</li>
<li>Clustering like-features together into a fixed number of clustered.</li>
<li>Constructing histograms of frequency of features in labeled images containing objects you would like your classifier to be able to detect.&nbsp;</li>
<li>Evaluating unknown images against the histograms obtained in step 3 to classify objects in the image.</li>
</ol>
Each step will be explored in detail.<br />
&nbsp;<b><br />Step 1 : Extracting</b><b> features  from a set of training images</b><br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-32k6xDx8xNk/ULhgDEbqTrI/AAAAAAAAADU/LSSiUKRzMUQ/s1600/bagoffeatures.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://1.bp.blogspot.com/-32k6xDx8xNk/ULhgDEbqTrI/AAAAAAAAADU/LSSiUKRzMUQ/s320/bagoffeatures.png" height="214" width="320" /></a></div>
The first step involves extracting "features" from a set of training images. A feature can be thought of as any part of an image that is "interesting". For example, if we take the features from this face, it might be the mouth or the nose or the chin. There are many techniques to find what a feature is. SIFT (scale invarient feature transform) is a very popular method of doing so. OpenCV has the DescriptorExtractor class which has many other implementations of extraction. It is important to note that as features are extracted, the order in which they appeared in the image is no longer kept. This is based on a fundamental assumption in the bag of words technique claiming the position of a feature in an image is <b>unimportant</b> in deciding whether or not the object being classified is present in the image. The bag of words imagery can allow us to think of just tossing each feature haphazardly into a paper lunch bag, so the next time we reach in we don`t really know what were going to get.<br />
<b><br /></b>
<b>Step 2 :&nbsp; Clustering like-features together into a fixed number of clustered</b><br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-VBPLh68_tfY/ULhjtFOJQwI/AAAAAAAAADk/VlpViCwFPxM/s1600/clusters.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://4.bp.blogspot.com/-VBPLh68_tfY/ULhjtFOJQwI/AAAAAAAAADk/VlpViCwFPxM/s320/clusters.png" height="270" width="320" /></a></div>
<br />
Now that we have our bag full of unordered features, we are ready for step 2, clustering. Clustering involves pulling features out of our bag of features, and positioning them in space. The features position is determined by how closely matched they are to features already placed. So we can imagine that if we pulled a part of the eye out of the bag, we might place that feature near to the orange circle. Some features will match better than others, and that will be represented by the proximity it falls to the `cluster centre`. The number of clusters is fixed at the beginning of clustering and plays a large part in performance of this technique.<br />
<br />
Again OpenCV has this process essentially built into it`s features 2d library. There are many different implementations, FlannFeatureMatcher is just one.&nbsp; <br />
<br />
<b>Step 3 : Constructing histograms of frequency of features in labeled images 
containing objects you would like your classifier to be able to detect</b><br />
<b><br /></b>
Now that we have a cluster representation of our features, we can start to do some training. The training process uses supervised learning (the trainer is given whether or not the object is present in an image). This is done through a labelling scheme where you label the image before training with it.<br />
<br />
So with the labeled image, we extract all the key features and put them in a bag. Then we draw each feature one by one from the bag, and compare it to each of the clusters. When we find the cluster that best matches our feature, we note it down. For example, if we pulled a feature that is part of an eye, we might find a close match in the orange cluster, so we add 1 to the number of `orange` features are present. At the end of it, we will have some histogram representation showing how many features the image has in each cluster. This is our snapshot of what an image with a certain object in it might look like. With more and more training, we get more and more information to get a more accurate histogram representation. These histograms can be stored in classification objects such as a NormalBayesClassifier or cvSVM in OpenCV. These methods can be read about in their documentation.<br />
<br />
<b>Step 4 :&nbsp;&nbsp; Evaluating unknown images against the histograms obtained in step 3 to classify objects in the image</b><br />
<br />
Finally we are ready to classify objects in unseen images. This process is much the same as training, but without labels on the images. We extract features again and form a histogram representation of the image. Then we compare this histogram to the ones obtained during training. A positive match will have a high correlation.<br />
<br />
<br />
<br />
This post was meant as a simple introduction, I understand the details are note well covered but can be learned thoroughly in the paper shown above. Really, I just wanted to demonstrate the high level model for anyone who is interested.&nbsp; <br />
<b><br /></b>
<br />
<br />
<br />
<br />